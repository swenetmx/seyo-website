import React, { useEffect, useState } from "react"
import classes from "./HabitatModals.module.less"
import Modal from "react-bootstrap/Modal"

export default () => {
  const [showRegularModal, setShowRegularModal] = useState(false)
  const [showLargeModal, setShowLargeModal] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      readUrl()
    }, 1000)
  }, [])

  let readUrl = () => {
    if (typeof window === "undefined") {
      return
    }
    if (!!window.localStorage.prize) {
      return
    }
    console.log("reading qr")
    const urlObject = new URL(window.location.href)
    let value = urlObject.searchParams.get("forma")
    if (value === "clientes") {
      setShowRegularModal(true)
    } else if (value === "proyectos-y-distribuidores") {
      setShowLargeModal(true)
    }
  }

  let storeEmail = e => {
    if (typeof window === "undefined") {
      return
    }
    window.localStorage.habitatEmail = e.target.value
  }

  return (
    <div className={classes.container}>
      <Modal show={showRegularModal} onHide={() => setShowRegularModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>¡Participa y gana con Seyo!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Llena tus datos y prueba tu Suerte 🍀 </p>
          <form
            className={classes.container}
            data-netlify="true"
            method="POST"
            name="habitat-clientes"
            action="/ruleta/"
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
              <label htmlFor="Producto de interés">Producto de interés:</label>
              <input
                type="text"
                name="Producto de interés"
                id="Producto de interés"
              />
            </div>
            <div className={classes.button}>
              <button className="small-button-blue-pill">ENVIAR</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <Modal show={showLargeModal} onHide={() => setShowLargeModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>¡Bienvenido a Seyo! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            method="POST"
            name="habitat-proyectos-y-distribuidores"
            action="/ruleta/"
          >
            <input
              type="hidden"
              name="form-name"
              value="habitat-proyectos-y-distribuidores"
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
        </Modal.Body>
      </Modal>
    </div>
  )
}
