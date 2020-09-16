import React, { useState } from "react"
import classes from "./NavContent.module.less"
import logo from "images/logo.png"
import menu from "images/grid.svg"
import closeIcon from "images/close.svg"
import { Link } from "gatsby"
import Cart from "../Cart/Cart"

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={[classes.container, open ? classes.menuOpen : ""].join(" ")}
    >
      <Link to="/" className={classes.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <ul onClick={() => setOpen(false)}>
        <li>
          <Link to="/cerraduras">Cerraduras Inteligentes</Link>
        </li>
        <li>
          <Link to="/otros-productos">Otros Productos</Link>
        </li>
        <li>
          <Link to="/soporte">Soporte</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/comunidad">Comunidad</Link>
        </li>
        <li>
          <Link to="/distribuidores">Distribuidores</Link>
        </li>
      </ul>
      <Cart />
      <img
        onClick={() => setOpen(false)}
        src={closeIcon}
        className={classes.closeButton}
      />
      <img
        onClick={() => setOpen(true)}
        src={menu}
        className={classes.menuButton}
      />
    </div>
  )
}
