import React, { useState } from "react"
import classes from "./Resources.module.less"
import app from "images/support/app.jpg"
import manual from "images/support/manual.jpg"
import plantillas from "images/support/plantillas.jpg"
import Modal from "react-bootstrap/Modal"
import { PRODUCTS } from "utils/prices"

let productsArray = Object.keys(PRODUCTS).map(it => PRODUCTS[it])
let plantillasList = productsArray.filter(it => it.template)
let manualesList = productsArray.filter(it => it.manual)

export default () => {
  const [showPlantillas, setShowPlantillas] = useState(false)
  const [showManuales, setShowManuales] = useState(false)
  return (
    <div className={classes.container}>
      <Modal show={showPlantillas} onHide={() => setShowPlantillas(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Plantillas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.linksGrid}>
            {plantillasList.map((it, index) => (
              <a href={it.template} target="_blank" key={index}>
                {it.name}
              </a>
            ))}
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showManuales} onHide={() => setShowManuales(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Manuales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.linksGrid}>
            {manualesList.map((it, index) => (
              <a key={index} href={it.manual} target="_blank">
                {it.name}
              </a>
            ))}
          </div>
        </Modal.Body>
      </Modal>

      <div className={classes.flex2}>
        <span onClick={() => setShowManuales(true)}>
          <img src={manual} alt="manual" />
        </span>
        <span onClick={() => setShowPlantillas(true)}>
          <img src={plantillas} alt="plantillas" />
        </span>
        <a
          rel="noopener noreferrer"
          href="/soporte/app/manual.pdf"
          target="_blank"
        >
          <img src={app} alt="app" />
        </a>
      </div>
    </div>
  )
}
