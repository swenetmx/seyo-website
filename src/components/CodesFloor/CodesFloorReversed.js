import React from "react"
import classes from "stylesheets/serviceFloor.module.less"
import app_recurso from "images/locks/shared_all/codigoRecurso.png"
import codigo_b from "images/icons/codigo_b.png"

export default ({ img, hideExtraText, text, title, label, icon }) => (
  <div className={classes.container}>
    <div>
      <div className={classes.text}>
        <h3>
          <img src={icon || codigo_b} alt="" />
          <b>
            {title || "CÓDIGO DE ACCESO"}
            <span>{label || "Desde cualquier lugar"}</span>
          </b>
        </h3>
        {text || (
          <p>
            Genera cuantos <b>códigos</b> necesites, programa sus permisos de
            uso desde tu app movil y <b>compártelos</b> de manera ilimitada.
          </p>
        )}
      </div>
      <img src={img || app_recurso} alt="" />
    </div>
    {hideExtraText ? (
      <p></p>
    ) : (
      <p>
        Comparte códigos de acceso mediante mensajes de texto, <b>Whatsapp</b> o{" "}
        <b>Messenger</b>.
      </p>
    )}
  </div>
)
