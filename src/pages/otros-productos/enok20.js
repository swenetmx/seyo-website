import React from "react"
import classes from "stylesheets/singleLock.module.less"
import "stylesheets/main.module.less"
import banner from "images/accesories/ENOK20/banner.jpg"
import LockBanner from "components/LockBanner/LockBanner"
import { getPriceString } from "../../utils/functions"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import FingerPrintFloor from "components/FingerPrintFloor/FingerPrintFloor"
import AppWifiFloor from "components/AppWifiFloor/AppWifiFloor"
import CodesFloor from "components/CodesFloor/CodesFloor"
import { addToCart } from "components/Cart/Cart"
import movimiento from "images/accesories/iconos/movimiento.png"
import lente from "images/accesories/iconos/lente.png"
import wifi from "images/accesories/iconos/wifi.png"
import ip from "images/accesories/iconos/ip.png"
import notificaciones from "images/accesories/iconos/notificaciones.png"
import hd from "images/accesories/iconos/hd.png"
import vision from "images/accesories/iconos/vision.png"
import bateria from "images/accesories/iconos/bateria.png"

import movimiento_a from "images/accesories/iconos/movimiento_a.png"
import ip_a from "images/accesories/iconos/ip_a.png"
import wifi_a from "images/accesories/iconos/wifi_a.png"
import hd_a from "images/accesories/iconos/hd_a.png"
import vision_a from "images/accesories/iconos/vision_a.png"
import Resources from "components/Resources/Resources"

import movimiento_ENOK from "images/accesories/ENOK20/movimiento.png"
import wifi_ENOK from "images/accesories/ENOK20/wifi.png"
import hd_ENOK from "images/accesories/ENOK20/hd.png"
import vision_ENOK from "images/accesories/ENOK20/vision.png"

const KEY_NAME = "ENOK20"

const caracteristics = [
  {
    img: movimiento,
    title: "Detección de movimiento",
  },
  {
    img: notificaciones,
    title: "Notificación Remota",
  },
  {
    img: lente,
    title: "Lente gran angular",
  },
  {
    img: wifi,
    title: "Conexión WiFi",
  },
  {
    img: ip,
    title: "Certificación IP64",
  },
  {
    img: hd,
    title: "Video Full HD",
  },
  {
    img: bateria,
    title: "Batería de larga duración",
  },
  {
    img: vision,
    title: "Visión nocturna",
  },
]

export default () => (
  <Layout
    productToPurchase={KEY_NAME}
    title={`Seyo | Productos - ${KEY_NAME}`}
    description="Da un paso más hacia la automatización doméstica"
    canonical="/otros-productos/enok20/"
  >
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>{KEY_NAME}</h1>
      <LockBanner
        img={banner}
        label="Cámara"
        title={KEY_NAME}
        price={getPriceString(KEY_NAME)}
        darkText
        reverse
        actions={[
          {
            title: "COMPRAR",
            onClick: () => addToCart(KEY_NAME),
          },
        ]}
      />
      <h2 className={classes.intro}>
        Conoce más de <b>{KEY_NAME}</b>
      </h2>
      <div className={classes.caracteristics}>
        <h3>CARACTERÍSTICAS</h3>
        <div>
          {caracteristics.map((it, index) => (
            <div>
              <img src={it.img} alt={it.title} />
              <span>{it.title}</span>
            </div>
          ))}
        </div>
      </div>
      <FingerPrintFloor
        img={movimiento_ENOK}
        icon={movimiento_a}
        title="DETECCIÓN DE MOVIMIENTO"
        label=" "
        text={
          <p>
            ENOK te mandará una <b>notificación</b> en tiempo real a{" "}
            <b>tu celular</b> cuando detecte <b>movimiento</b>.
          </p>
        }
        bottomText={
          <p>
            Con la <b>aplicación AIWIT</b> Recibe notificaciones en tiempo real
            y monitorea el exterior de tu domicilio desde la palma de tu mano.
          </p>
        }
      />
      <AppWifiFloor
        img={wifi_ENOK}
        title1="CONEXIÓN WIFI"
        title2="CERTIFICACIÓN IP65"
        icon1={wifi_a}
        icon2={ip_a}
        text1={
          <p>
            Utiliza <b>conectividad a internet</b> para monitorear el exterior
            de tu casa y manten <b>el control desde tu celular</b>.
          </p>
        }
        text2={
          <p>
            Gracias a la <b>certificacion IP65</b> podras instalar tu cámara
            ENOK20 en la <b>ubicación que mas te convenga</b>.
          </p>
        }
        hideExtraText
      />
      <CodesFloor
        img={vision_ENOK}
        icon={vision_a}
        title="VISIÓN NOCTURNA"
        label=" "
        text={
          <p>
            Día y noche <b>ENOK te cuida</b> y te manda{" "}
            <b>alertas de movimiento</b> aún cuando sea <b>de noche.</b>
          </p>
        }
        hideExtraText
      />

      <FingerPrintFloor
        img={hd_ENOK}
        icon={hd_a}
        title="VIDEO FULL HD"
        label=" "
        text={
          <p>
            <b>ENOK</b> registrara sus videos en <b>alta resolución 1080p</b>{" "}
            para que puedas monitorear el exterior con la{" "}
            <b>mejor calidad de video.</b>
          </p>
        }
        hideExtraText
      />
      <Resources manual="enok" specs="enok" hideApp />
    </div>
  </Layout>
)
