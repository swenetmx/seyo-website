import React from "react"
import classes from "stylesheets/singleLock.module.less"
import "stylesheets/main.module.less"
import banner from "images/locks/mist19/banner.jpg"
import mecanismo from "images/locks/mist19/mecanismo.jpg"
import llave from "images/locks/shared_all/llaveMecanicaRecurso.png"
import huella from "images/locks/mist19/huella.png"
import LockBanner from "components/LockBanner/LockBanner"
import { getPriceString } from "../../utils/functions"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import UnlockMethods from "components/UnlockMethods/UnlockMethods"
import LockMachinery from "components/LockMachinery/LockMachinery"
import FingerPrintFloor from "components/FingerPrintFloor/FingerPrintFloor"
import AppWifiFloor from "components/AppWifiFloor/AppWifiFloor"
import Resources from "components/Resources/Resources"
import KeyFloor from "components/KeyFloor/KeyFloor"
var EventBus = require("eventbusjs")

const KEY_NAME = "MIST19"

export default () => (
  <Layout
    title={`Seyo | Productos - ${KEY_NAME}`}
    description="Abre la puerta al futuro, abre la puerta a SEYO."
    canonical="/cerraduras/mist19/"
  >
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>{KEY_NAME}</h1>
      <LockBanner
        img={banner}
        label="Cerradura Inteligente"
        title={KEY_NAME}
        price={getPriceString(KEY_NAME)}
        darkText
        actions={[
          {
            title: "AGOTADO",
            onClick: () =>
              EventBus.dispatch(
                "show_toast",
                null,
                "Lo sentimos, el producto no se encuentra en existencia",
                "warning"
              ),
          },
        ]}
      />
      <h2 className={classes.intro}>
        Conoce más de <b>{KEY_NAME}</b>
      </h2>
      <LockMachinery
        padRight
        img={mecanismo}
        options={[
          <p>
            Pestillo <b>automático</b>
          </p>,
          <p>
            Anti <b>tarjetas</b>
          </p>,
        ]}
      />
      <div className={classes.methods}>
        <UnlockMethods
          size="large"
          methods={["huella", "wifi", "app", "llave"]}
          direction="center"
        />
      </div>
      <FingerPrintFloor img={huella} />
      <AppWifiFloor />
      <KeyFloor img={llave} />
      <Resources manual="mist" plantilla="mist" />
    </div>
  </Layout>
)
