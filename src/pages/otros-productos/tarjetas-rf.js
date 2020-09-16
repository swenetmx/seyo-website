import React from "react"
import classes from "stylesheets/singleLock.module.less"
import "stylesheets/main.module.less"
import banner from "images/accesories/cards/banner.jpg"
import LockBanner from "components/LockBanner/LockBanner"
import { getPriceString } from "../../utils/functions"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import UnlockMethods from "components/UnlockMethods/UnlockMethods"
import Resources from "components/Resources/Resources"
import AccessCardFloor from "components/AccessCardFloor/AccessCardFloor"
import tarjeta from "images/locks/freya/tarjeta.png"
import { addToCart } from "components/Cart/Cart"

export default () => (
  <Layout
    productToPurchase="TARJETAS_RF"
    title={`Seyo | Productos - TARJETAS RF`}
    description="Da un paso más hacia la automatización doméstica"
  >
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>TARJETAS</h1>
      <LockBanner
        img={banner}
        label="Tarjetas RF"
        title="TARJETAS"
        price={getPriceString("TARJETAS_RF")}
        darkText
        actions={[
          {
            title: "COMPRAR",
            onClick: () => addToCart("TARJETAS_RF"),
          },
        ]}
      />
      <h2 className={classes.intro}>
        Tarjetas de <b>acceso</b> por <b>proximidad</b>
      </h2>
      <div className={classes.methods}>
        <UnlockMethods size="large" methods={["tarjeta"]} direction="center" />
      </div>
      <AccessCardFloor img={tarjeta} />
    </div>
  </Layout>
)
