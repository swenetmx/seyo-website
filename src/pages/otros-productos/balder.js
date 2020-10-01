import React from "react"
import classes from "stylesheets/singleLock.module.less"
import "stylesheets/main.module.less"
import banner from "images/accesories/BALDER/banner.jpg"
import huella from "images/accesories/BALDER/huella.jpeg"
import codigo from "images/accesories/BALDER/codigo.png"
import LockBanner from "components/LockBanner/LockBanner"
import { getPriceString } from "../../utils/functions"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import UnlockMethods from "components/UnlockMethods/UnlockMethods"
import Resources from "components/Resources/Resources"
import { addToCart } from "components/Cart/Cart"
import FingerPrintFloor from "components/FingerPrintFloor/FingerPrintFloor"
import CodesFloor from "components/CodesFloor/CodesFloor"
import KeyFloor from "components/KeyFloor/KeyFloor"
import LockMachinery from "components/LockMachinery/LockMachinery"
import mecanismo from "images/accesories/BALDER/machinery.png"

const KEY_NAME = "BALDER"

export default () => (
  <Layout
    productToPurchase={KEY_NAME}
    title={`Seyo | Productos - ${KEY_NAME}`}
    description="Da un paso más hacia la automatización doméstica"
  >
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>{KEY_NAME}</h1>
      <LockBanner
        img={banner}
        label="GAVETA DE SEGURIDAD"
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
        Conoce más de <b>BALDER</b>
      </h2>
      <LockMachinery
        title={
          <p>
            <span>Gaveta de seguridad</span>
            <b>apertura por huella y código</b>
          </p>
        }
        img={mecanismo}
        options={[
          <p>
            Lector <b>biométrico</b>
          </p>,
          <p>
            Teclado <b>táctil</b>
          </p>,
          <p>
            Diseño <b>sencillo de integrar</b>
          </p>,
        ]}
      />
      <div className={classes.methods}>
        <UnlockMethods
          size="large"
          methods={["huella", "codigo", "llave"]}
          direction="center"
        />
      </div>
      <CodesFloor
        img={codigo}
        text={
          <p>
            Podras generar hasta <b>40 códigos</b> para estar <b>siempre</b> en
            control y proteger tus pertenencias con el{" "}
            <b>maximo nivel de seguridad.</b>
          </p>
        }
        hideExtraText
      />
      <FingerPrintFloor
        img={huella}
        text={
          <p>
            Registra <b>hasta 40 huellas dactilares</b>.{" "}
            <b>Manten tus pertenencias de valor al alcance</b> y siempre bajo
            control.
          </p>
        }
        hideExtraText
      />
      <KeyFloor />
      <Resources manual="balder" hideApp />
    </div>
  </Layout>
)
