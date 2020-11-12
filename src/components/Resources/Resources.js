import React from "react"
import classes from "./Resources.module.less"
import app from "images/support/app.jpg"
import manualImg from "images/support/manual.jpg"
import plantillasImg from "images/support/plantillas.jpg"
import specsImg from "images/support/specs.jpeg"

export default ({ manual, specs, plantilla, hideApp }) => (
  <div className={classes.container}>
    <h4>
      Recursos para <b>instalación</b>
    </h4>
    <div className={classes.flex}>
      {manual ? (
        <a
          rel="noopener noreferrer"
          href={`/soporte/${manual}/manual.pdf`}
          target="_blank"
        >
          <img src={manualImg} alt="app" />
        </a>
      ) : null}
      {plantilla ? (
        <a
          rel="noopener noreferrer"
          href={`/soporte/${plantilla}/plantilla.pdf`}
          target="_blank"
        >
          <img src={plantillasImg} alt="app" />
        </a>
      ) : null}
      {specs ? (
        <a
          rel="noopener noreferrer"
          href={`/soporte/${specs}/specs.pdf`}
          target="_blank"
        >
          <img src={specsImg} alt="app" />
        </a>
      ) : null}
      {hideApp ? null : (
        <a
          rel="noopener noreferrer"
          href="/soporte/app/manual.pdf"
          target="_blank"
        >
          <img src={app} alt="app" />
        </a>
      )}
    </div>
  </div>
)
