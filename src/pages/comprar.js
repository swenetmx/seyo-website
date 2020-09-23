import React, { useState, useEffect } from "react"
import classes from "stylesheets/cart.module.less"
import "stylesheets/main.module.less"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import Table from "components/Table/Table"
import { formatMoney, getOrderFromStorage } from "utils/functions"
import plus from "images/add.svg"
import minus from "images/substract.svg"
import bin from "images/bin.svg"
import { Link } from "gatsby"
import { PayPalButton } from "react-paypal-button-v2"

var EventBus = require("eventbusjs")

const CLIENT = {
  sandbox:
    "ATtCcMdOrupEBVxY8Wn3CaNzmswgnasFD9vZTMPu0hq--FBPfC-juTzFe2eOCwL3KKhF8ooRRar523Pp",
  production:
    "AYXOqRUfWU1KrAknRKBYJxhboFTgLrhhaSg-0ExoPcE7grLqlEaEDAqetDzaf0ury9Ht8U8bsTuIU3ie",
}

const CLIENT_ID =
  process.env.GATSBY_ENV === "PRODUCTION" ? CLIENT.production : CLIENT.sandbox

export default () => {
  let [order, setOrder] = useState([])
  let [loading, setLoading] = useState(false)
  let [pay, setPay] = useState(false)

  useEffect(() => {
    setOrder(getOrderFromStorage())
  }, [])

  let setNewProductAmount = (newOrder, newValue, code, index) => {
    if (newValue === 0) {
      newOrder.splice(index, 1)
    } else {
      newOrder[index] = {
        ...newOrder[index],
        amount: newValue,
      }
    }
    setOrder(newOrder)
    let cart = JSON.parse(localStorage.cart)
    cart[code].amount = newValue
    localStorage.cart = JSON.stringify(cart)
    EventBus.dispatch("rerender_cart")
  }

  let reduceAmount = code => {
    if (loading || pay) return
    let index = order.findIndex(it => it.code === code)
    let newOrder = order.map(it => ({ ...it }))
    let newValue = newOrder[index].amount - 1
    setNewProductAmount(newOrder, newValue, code, index)
  }

  let increaseAmount = code => {
    if (loading || pay) return
    let index = order.findIndex(it => it.code === code)
    let newOrder = order.map(it => ({ ...it }))
    let newValue = newOrder[index].amount + 1
    setNewProductAmount(newOrder, newValue, code, index)
  }

  let removeProduct = code => {
    if (loading || pay) return
    let index = order.findIndex(it => it.code === code)
    let newOrder = order.map(it => ({ ...it }))
    let newValue = 0
    setNewProductAmount(newOrder, newValue, code, index)
    EventBus.dispatch(
      "show_toast",
      null,
      "Se ha removido el producto.",
      "success"
    )
  }

  let calculateTotal = () =>
    order.reduce((acc, { price, amount }) => acc + price * amount, 0)

  let columns = [
    {
      title: "Producto",
      dataIndex: "name",
      render: (name, element) => (
        <div className={classes.product}>
          <Link to={element.link}>
            <img
              src={element.image}
              alt="logo"
              width="70"
              height="90"
              loading="lazy"
            />
            {name}
          </Link>
        </div>
      ),
    },
    {
      title: "Precio",
      dataIndex: "price",
      render: price => "$" + formatMoney(price),
    },
    {
      title: "Cantidad",
      dataIndex: "amount",
      render: (amount, element) =>
        pay ? (
          amount
        ) : (
          <div className={classes.actions}>
            <img src={bin} alt="" onClick={() => removeProduct(element.code)} />
            <div className={classes.changeAmount}>
              <img
                src={minus}
                alt=""
                onClick={() => reduceAmount(element.code)}
              />
              <span>{amount}</span>
              <img
                src={plus}
                alt=""
                onClick={() => increaseAmount(element.code)}
              />
            </div>
          </div>
        ),
    },
    {
      title: "Total (MXN)",
      dataIndex: "name",
      render: (_, { amount, price }) => "$" + formatMoney(amount * price),
    },
  ]

  let encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  let stringifyProducts = () => {
    return order.map(it => `${it.name} (${it.amount})`).join(", ")
  }

  let sendErrorMessage = stringDetails => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "Cadena de detalles de PayPal": stringDetails,
      }),
    })
      .then(() => window.location.replace("/orden-completada"))
      .catch(error => {
        EventBus.dispatch(
          "show_toast",
          null,
          "Se ha producido un error. Tu pago está seguro pero es necesario te pongas en contacto con mexico@swedishnet.mx",
          "error"
        )
      })
  }

  let submitPurchase = (orderID, details) => {
    if (typeof window === "undefined") return
    let stringDetails = JSON.stringify(details)
    let units = details.purchase_units
    let direccion = {}
    if (units.length) {
      let address = units[0].shipping.address
      direccion = {
        Direccion: address.address_line_1,
        Colonia: address.address_line_2,
        Estado: address.admin_area_1,
        Ciudad: address.admin_area_2,
        Pais: address.country_code,
        "Codigo Postal": address.postal_code,
        Nombre: units[0].shipping.name.full_name,
        "Total Pagado": `${units[0].amount.value} ${units[0].amount.currency_code}`,
        "Cadena de detalles de PayPal": stringDetails,
      }
    }
    try {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "orden-completada",
          Productos: stringifyProducts(),
          "ID de la orden": orderID,
          Email: details.payer.email_address,
          ...direccion,
        }),
      })
        .then(() => {
          window.location.replace("/orden-completada")
        })
        .catch(error => {
          sendErrorMessage(stringDetails)
        })
    } catch (error) {
      sendErrorMessage(stringDetails)
    }
  }

  return (
    <Layout
      title="Seyo | Carrito de Compras"
      description="Tus productos están aquí."
    >
      <form
        data-netlify="true"
        className={classes.container}
        action="/"
        method="POST"
        name="orden-completada"
      >
        <input type="hidden" name="ID de la orden" value="" />
        <input type="hidden" name="Productos" value="" />
        <input type="hidden" name="Total Pagado" value="" />
        <input type="hidden" name="Nombre" value="" />
        <input type="hidden" name="Email" value="" />
        <input type="hidden" name="Direccion" value="" />
        <input type="hidden" name="Colonia" value="" />
        <input type="hidden" name="Estado" value="" />
        <input type="hidden" name="Ciudad" value="" />
        <input type="hidden" name="Pais" value="" />
        <input type="hidden" name="Codigo Postal" value="" />
        <input type="hidden" name="form-name" value="orden-completada" />
        <input type="hidden" name="Cadena de detalles de PayPal" value="" />
        <>
          <PreHeader type="h2" />
          <h1>CARRITO DE COMPRAS</h1>
        </>
        <>
          {!order.length ? (
            <p className={classes.empty}>
              <span>Tu carrito está vacio.</span>
              <Link to="/cerraduras">Ver Cerraduras</Link>{" "}
            </p>
          ) : (
            <>
              <Table
                dataSource={order}
                columns={columns}
                rowKey="code"
                className={classes.largeTable}
              />
              <h3 className={classes.total}>
                <span>Total:</span>
                <b>{"$" + formatMoney(calculateTotal())}</b>
              </h3>
              <div className={classes.paypal}>
                {loading ? (
                  <div className={classes.spinner}></div>
                ) : pay ? (
                  <PayPalButton
                    amount={calculateTotal()}
                    onSuccess={(details, data) => {
                      setLoading(true)
                      submitPurchase(data.orderID, details)
                    }}
                    onError={error => {
                      console.log("error", error)
                    }}
                    options={{
                      clientId: CLIENT_ID,
                      currency: "MXN",
                    }}
                    style={{
                      layout: "vertical",
                      color: "blue",
                      shape: "rect",
                      label: "pay",
                      false: false,
                    }}
                  />
                ) : (
                  <button
                    className={classes.pay}
                    type=""
                    onClick={e => {
                      e.preventDefault()
                      setPay(true)
                    }}
                  >
                    PAGAR AHORA
                  </button>
                )}
              </div>
            </>
          )}
        </>
      </form>
    </Layout>
  )
}
