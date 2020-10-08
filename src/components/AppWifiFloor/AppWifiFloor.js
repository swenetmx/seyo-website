import React from "react"
import classes from "./AppWifiFloor.module.less"
import app_recurso from "images/locks/shared_all/app-wifiRecurso.png"
import { Link } from "gatsby"
import app_b from "images/icons/app_b.png"
import wifi_b from "images/icons/wifi_b.png"

export default ({
  img,
  icon1,
  icon2,
  title1,
  title2,
  text1,
  text2,
  hideExtraText,
  bottomText,
}) => (
  <div className={classes.container}>
    <div>
      <div className={classes.text1}>
        <div>
          <img src={icon1 || wifi_b} alt="" />
          <h3>
            <b>{title1 || "APERTURA REMOTA"}</b>
          </h3>
        </div>
        {text1 || (
          <p>
            Utiliza conectividad a <b>internet</b> para aperturar tu cerradura
            inteligente y recibe <b>notificaciones</b> en tiempo real de su uso
            en
            <b>cualquier parte del mundo.</b> <br />
            (Solo con <Link to="/otros-productos/gateway/">Gateway*</Link>)
          </p>
        )}
      </div>
      <img src={img || app_recurso} alt="" />
      <div className={classes.text2}>
        <div>
          <img src={icon2 || app_b} alt="" />
          <h3>
            <b>{title2 || "APERTURA LOCAL POR APP"}</b>
          </h3>
        </div>
        {text2 || (
          <p>
            Control via <b>bluetooth</b>.
            <br />
            <br /> Utiliza tu <b>aplicación</b> para aperturar tu cerradura via{" "}
            <b>bluetooth</b> (en un radio de hasta 2 metros) y recibe{" "}
            <b>notificaciones</b> en tiempo real de su uso.
          </p>
        )}
      </div>
    </div>
    {hideExtraText ? (
      <p></p>
    ) : (
      bottomText || (
        <p>
          Utiliza tu <b>APP TTLOCK</b> y registra mutiples usuarios registrando
          huellas, codigos o tarjetas de apertura.
        </p>
      )
    )}
  </div>
)
