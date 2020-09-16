import React, { useState, useEffect } from "react"
import classes from "./CartMessage.module.less"
import { formatMoney, getOrderFromStorage } from "utils/functions"
import closeIcon from "images/close.svg"
import { Link } from "gatsby"
var EventBus = require("eventbusjs")

let CartMessage = ({ visible }) => {
  let [order, setOrder] = useState([])

  useEffect(() => {
    setOrder(getOrderFromStorage())
  }, [visible])

  return (
    <div
      className={[classes.container, visible ? classes.visible : ""].join(" ")}
    >
      <img
        onClick={() => EventBus.dispatch("hide_cart")}
        src={closeIcon}
        className={classes.closeButton}
      />
      {order.map((it, index) => (
        <div className={classes.cartItem} key={index}>
          <img
            src={it.image}
            alt="logo"
            width="50"
            height="80"
            loading="lazy"
          />
          <div>
            <b>{it.name}</b>
            <span>
              {it.amount} x {formatMoney(it.price)} MXN
            </span>
          </div>
        </div>
      ))}
      <Link to="/comprar">
        <button>VER CARRITO</button>
      </Link>
    </div>
  )
}

export default CartMessage
