import React from "react"
import classes from "stylesheets/singleLock.module.less"
import "stylesheets/main.module.less"
import banner from "images/accesories/FRIGG/banner.jpg"
import LockBanner from "components/LockBanner/LockBanner"
import { getPriceString } from "../../utils/functions"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import FingerPrintFloor from "components/FingerPrintFloor/FingerPrintFloor"
import AppWifiFloor from "components/AppWifiFloor/AppWifiFloor"
import CodesFloor from "components/CodesFloor/CodesFloor"
import { addToCart } from "components/Cart/Cart"
import movimiento from "images/accesories/FRIGG/iconos/movimiento.png"
import audio from "images/accesories/FRIGG/iconos/audio.png"
import lente from "images/accesories/FRIGG/iconos/lente.png"
import wifi from "images/accesories/FRIGG/iconos/wifi.png"
import ip from "images/accesories/FRIGG/iconos/ip.png"
import notificaciones from "images/accesories/FRIGG/iconos/notificaciones.png"
import hd from "images/accesories/FRIGG/iconos/hd.png"
import nube from "images/accesories/FRIGG/iconos/nube.png"
import vision from "images/accesories/FRIGG/iconos/vision.png"
import bateria from "images/accesories/FRIGG/iconos/bateria.png"

import movimiento_a from "images/accesories/FRIGG/iconos/movimiento_a.png"
import audio_a from "images/accesories/FRIGG/iconos/audio_a.png"
import lente_a from "images/accesories/FRIGG/iconos/lente_a.png"
import wifi_a from "images/accesories/FRIGG/iconos/wifi_a.png"
import ip_a from "images/accesories/FRIGG/iconos/ip_a.png"
import notificaciones_a from "images/accesories/FRIGG/iconos/notificaciones_a.png"
import hd_a from "images/accesories/FRIGG/iconos/hd_a.png"
import nube_a from "images/accesories/FRIGG/iconos/nube_a.png"
import vision_a from "images/accesories/FRIGG/iconos/vision_a.png"
import bateria_a from "images/accesories/FRIGG/iconos/bateria_a.png"

import movimiento_frigg from "images/accesories/FRIGG/movimiento.png"
import wifi_frigg from "images/accesories/FRIGG/wifi.png"
import hd_frigg from "images/accesories/FRIGG/hd.png"
import vision_frigg from "images/accesories/FRIGG/vision.png"
const KEY_NAME = "FRIGG"

const caracteristics = [
  {
    img: movimiento,
    title: "Detección de movimiento",
  },
  {
    img: audio,
    title: "Audio bidireccional",
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
    img: notificaciones,
    title: "Notificación Remota",
  },
  {
    img: hd,
    title: "Video Full HD",
  },
  {
    img: nube,
    title: "Almacenamiento en nube",
  },
  {
    img: vision,
    title: "Visión nocturna",
  },
  {
    img: bateria,
    title: "Batería de larga duración",
  },
]

export default () => (
  <Layout
    productToPurchase={KEY_NAME}
    title={`Seyo | Productos - ${KEY_NAME}`}
    description="Da un paso más hacia la automatización doméstica"
  >
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>{KEY_NAME}20</h1>
      <LockBanner
        img={banner}
        label="Cerradura Inteligente"
        title={KEY_NAME + "20"}
        price={getPriceString(KEY_NAME)}
        darkText
        actions={[
          {
            title: "COMPRAR",
            onClick: () => addToCart(KEY_NAME),
          },
        ]}
      />
      <h2 className={classes.intro}>
        Conoce más de <b>{KEY_NAME}20</b>
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
        img={movimiento_frigg}
        icon={movimiento_a}
        title="DETECCIÓN DE MOVIMIENTO"
        label=" "
        text={
          <p>
            FRIGG te mandará una <b>notificación</b> en tiempo real a{" "}
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
        img={wifi_frigg}
        title1="CONEXIÓN WIFI"
        title2="AUDIO BIDIRECCIONAL"
        icon1={wifi_a}
        icon2={audio_a}
        text1={
          <p>
            Utiliza <b>conectividad a internet</b> para monitorear el exterior
            de tu casa y manten <b>el control desde tu celular</b>.
          </p>
        }
        text2={
          <p>
            Utiliza tu <b>aplicación</b> para <b>comunicarte</b> con las
            personas que interactuen con FRIGG y{" "}
            <b>habla con ellos de manera remota</b> y segura desde tu{" "}
            <b>celular</b>.
          </p>
        }
        hideExtraText
      />
      <CodesFloor
        img={vision_frigg}
        icon={vision_a}
        title="VISIÓN NOCTURNA"
        label=" "
        text={
          <p>
            Día y noche <b>FRIGG te cuida</b> y te manda{" "}
            <b>alertas de movimiento</b> aun cuando sea <b>de noche.</b>
          </p>
        }
        hideExtraText
      />

      <FingerPrintFloor
        img={hd_frigg}
        icon={hd_a}
        title="VIDEO FULL HD"
        label=" "
        text={
          <p>
            <b>FRIGG</b> registrara sus videos en <b>alta resolución 1080p</b>{" "}
            para que puedas monitorear el exterior con la{" "}
            <b>mejor calidad de video.</b>
          </p>
        }
        hideExtraText
      />
    </div>
  </Layout>
)
