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
      title="Seyo | ¡Bienvenido a Seyo!"
      description=""
      canonical="/habitat/distribuidores/"
    >
      <div className={classes.container}>
        <h1>¡Bienvenido a Seyo!</h1>
        <div className={classes.content}>
          <p>
            Seguridad, facilidad, tranquilidad y calidad, eso que buscas Seyo lo
            pondrá en el hogar de tu cliente final.
            <br />
            <br />
            Te pedimos llenar los siguientes datos para poder generar un
            acercamiento y darte a conocer los beneficios y el respaldo de
            nuestra marca.
          </p>
          <form
            className={classes.container}
            data-netlify="true"
            name="habitat-distribuidores"
            action="/"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="form-name"
              value="habitat-distribuidores"
            />
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
              <label htmlFor="Telefono">Teléfono:</label>
              <input type="number" name="Telefono" id="Telefono" />
            </div>
            <div>
              <label htmlFor="Nombre de la empresa">
                Nombre de la empresa:
              </label>
              <input
                type="text"
                name="Nombre de la empresa"
                id="Nombre de la empresa"
              />
            </div>
            <div>
              <label htmlFor="Interesado en: ">Interesado en:</label>
              <select name="Interesado en: " id="Interesado en: " required>
                <option value="Desarollo de marca en proyectos inmobiliarios. ">
                  Desarollo de marca en proyectos inmobiliarios.{" "}
                </option>
                <option value="Distribución de Marca ">
                  Distribución de Marca
                </option>
              </select>
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
