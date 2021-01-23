import React from "react"
import classes from "stylesheets/singleLock.module.less"
import "stylesheets/main.module.less"
import banner from "images/locks/vali20/banner.jpg"
import mecanismo from "images/locks/vali20/mecanismo.jpg"
import codigo from "images/locks/vali20/codigo.png"
import tarjeta from "images/locks/vali20/tarjeta.png"
import huella from "images/locks/vali20/huella.png"
import LockBanner from "components/LockBanner/LockBanner"
import { getPriceString } from "../../utils/functions"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import UnlockMethods from "components/UnlockMethods/UnlockMethods"
import LockMachinery from "components/LockMachinery/LockMachinery"
import AppWifiFloor from "components/AppWifiFloor/AppWifiFloor"
import CodesFloor from "components/CodesFloor/CodesFloor"
import FingerPrintFloor from "components/FingerPrintFloor/FingerPrintFloor"
import AccessCardFloor from "components/AccessCardFloor/AccessCardFloor"
import { addToCart } from "components/Cart/Cart"

const KEY_NAME = "VALI20"

export default () => (
  <Layout
    productToPurchase={KEY_NAME}
    title={`Seyo | Productos - ${KEY_NAME}`}
    description="Abre la puerta al futuro, abre la puerta a SEYO."
    canonical="/cerraduras/sol19/"
  >
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>{KEY_NAME}</h1>
      <LockBanner
        img={banner}
        label={
          <span style={{ fontWeight: "bold" }}>
            Cerradura Inteligente{" "}
            <b
              style={{
                display: "block",
                textAlign: "center",
                color: "white",
                fontWeight: "600",
              }}
            >
              (PUERTA DE CRISTAL)
            </b>
          </span>
        }
        title={KEY_NAME}
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
        Conoce más de <b>{KEY_NAME}</b>
      </h2>
      <LockMachinery
        img={mecanismo}
        options={[
          <p>
            Pestillo <b>automático</b>
          </p>,
          <p>
            Pestillo <b>manual (en interior)</b>
          </p>,
          <p>
            Barra de <b>seguridad</b>
          </p>,
          <p>
            Seguros retráctil para <b>puertas corredizas</b>
          </p>,
        ]}
      />
      <div className={classes.methods}>
        <UnlockMethods
          size="large"
          methods={["huella", "wifi", "app", "codigo", "tarjeta"]}
          direction="center"
        />
      </div>
      <FingerPrintFloor img={huella} />
      <AppWifiFloor />
      <CodesFloor img={codigo} />
      <AccessCardFloor img={tarjeta} />
    </div>
  </Layout>
)
