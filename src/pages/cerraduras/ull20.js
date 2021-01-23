import React from "react"
import classes from "stylesheets/singleLock.module.less"
import "stylesheets/main.module.less"
import banner from "images/locks/ull20/banner.jpg"
import mecanismo from "images/locks/ull20/mecanismo.jpg"
import llave from "images/locks/shared_all/llaveMecanicaRecurso.png"
import codigo from "images/locks/ull20/codigo.png"
import LockBanner from "components/LockBanner/LockBanner"
import { getPriceString } from "../../utils/functions"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import UnlockMethods from "components/UnlockMethods/UnlockMethods"
import LockMachinery from "components/LockMachinery/LockMachinery"
import AppFloor from "components/AppFloor/AppFloor"
import CodesFloor from "components/CodesFloor/CodesFloorReversed"
import KeyFloor from "components/KeyFloor/KeyFloor"
import { addToCart } from "components/Cart/Cart"

const KEY_NAME = "ULL20"

export default () => (
  <Layout
    productToPurchase={KEY_NAME}
    title={`Seyo | Productos - ${KEY_NAME}`}
    description="Abre la puerta al futuro, abre la puerta a SEYO."
    canonical="/cerraduras/ull2019/"
  >
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>{KEY_NAME}</h1>
      <LockBanner
        img={banner}
        label='Cerradura Inteligente TIPO "U"'
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
            Mecanismo tipo <b>"U"</b>
          </p>,
          <p>
            Media <b>regulable</b>
          </p>,
          <p>
            Barra de acero de <b>alta seguridad</b>
          </p>,
        ]}
      />
      <div className={classes.methods}>
        <UnlockMethods
          size="large"
          methods={["app", "codigo", "llave"]}
          direction="center"
        />
      </div>
      <AppFloor hideGateway/>
      <CodesFloor img={codigo} />
      <KeyFloor img={llave} />
    </div>
  </Layout>
)
