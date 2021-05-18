import React, { useEffect, useState, lazy } from "react"
import classes from "stylesheets/modals.module.less"
import "stylesheets/main.module.less"
import Layout from "components/Layout/Layout"
import { navigate } from "gatsby-link"

export default () => {
  let storeEmail = e => {
    if (typeof window === "undefined") {
      return
    }
    window.localStorage.habitatEmail = e.target.value
  }

  const handleSubmit = event => {
    event.preventDefault()
    let formData = new FormData(event.target)
    formData.append("form-name", event.target.getAttribute("name"))
    let body = new URLSearchParams(formData).toString()
    console.log("formData", formData)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    })
      .then(() => navigate("/ruleta/"))
      .catch(error => alert(error))
  }

  return (
    <Layout
      title="Seyo | ¡Participa y gana con Seyo!"
      description=""
      canonical="/habitat/clientes/"
    >
      <div className={classes.container}>
        <h1>¡Participa y gana con Seyo!</h1>
        <div className={classes.content}>
          <p>Llena tus datos y prueba tu Suerte 🍀 </p>
          <form
            className={classes.container}
            data-netlify="true"
            name="habitat-clientes"
            action="/"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="habitat-clientes" />
            <div>
              <label htmlFor="Nombre">Nombre:</label>
              <input type="text" name="Nombre" id="Nombre" required />
            </div>
            <div>
              <label htmlFor="Apellido">Apellido:</label>
              <input type="text" name="Apellido" id="Apellido" required />
            </div>
            <div>
              <label htmlFor="Correo">Correo Electrónico:</label>
              <input
                type="email"
                name="Correo"
                id="Correo"
                required
                onChange={storeEmail}
              />
            </div>
            <div>
              <label htmlFor="Telefono">Teléfono de contacto:</label>
              <input type="number" name="Telefono" id="Telefono" />
            </div>
            <div>
              <label htmlFor="Producto de interes">Producto de interés:</label>
              <input
                type="text"
                name="Producto de interes"
                id="Producto de interes"
              />
            </div>
            <div className={classes.button}>
              <button className="small-button-blue-pill">ENVIAR</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
