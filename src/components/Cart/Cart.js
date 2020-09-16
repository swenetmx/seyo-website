import React, { useEffect, useState } from "react"
import classes from "./Cart.module.less"
import cart from "images/icons/cart.svg"
import { Link } from "gatsby"
import { countCartItems } from "../../utils/functions"
import { useToasts, ToastProvider } from "react-toast-notifications"
import CartMessage from "./CartMessage"
var EventBus = require("eventbusjs")

let Cart = () => {
  let [visible, setVisible] = useState(false)
  const { addToast } = useToasts()
  let timeout = 0

  useEffect(() => {
    EventBus.addEventListener("rerender_cart", () => {
      setCartCount(countCartItems())
    })
    EventBus.addEventListener("show_cart", () => {
      setVisible(false)
      clearTimeout(timeout)
      setCartCount(countCartItems())
      setTimeout(() => {
        setVisible(true)
      }, 300)
      timeout = setTimeout(() => {
        setVisible(false)
      }, 4000)
    })
    EventBus.addEventListener("hide_cart", () => {
      setVisible(false)
    })
    EventBus.addEventListener("show_toast", (_, message, type) => {
      addToast(message, {
        appearance: type,
        autoDismiss: type !== "error",
      })
    })
  }, [])

  const [cartCount, setCartCount] = useState(countCartItems())

  return (
    <>
      <Link className={classes.container} to="/comprar">
        <img src={cart} alt="cart" className={classes.icon} />
        {cartCount > 0 ? (
          <span className={classes.count}>{cartCount}</span>
        ) : null}
        <div className={classes.hoverContent}></div>
      </Link>
      <CartMessage visible={visible} />
    </>
  )
}

export const addToCart = code => {
  if (typeof localStorage === "undefined") return
  let cart = JSON.parse(localStorage.cart || "{}")
  let product = cart[code] || { amount: 0 }
  product.amount += 1
  cart[code] = product
  localStorage.cart = JSON.stringify(cart)
  EventBus.dispatch("show_cart")
}

export default () => (
  <ToastProvider>
    <Cart />
  </ToastProvider>
)
