import React from "react"
import classes from "stylesheets/singleLock.module.less"
import "stylesheets/main.module.less"
import banner from "images/accesories/gateway/banner.jpg"
import LockBanner from "components/LockBanner/LockBanner"
import { getPriceString } from "../../utils/functions"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import UnlockMethods from "components/UnlockMethods/UnlockMethods"
import AppWifiFloor from "components/AppWifiFloor/AppWifiFloor"
import Resources from "components/Resources/Resources"
import { addToCart } from "components/Cart/Cart"

const KEY_NAME = "GATEWAY"

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
        label="Conectividad WiFi"
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
        Conectividad <b>WiFi</b> para tu <b>cerradura</b>
      </h2>
      <div className={classes.methods}>
        <UnlockMethods
          size="large"
          methods={["wifi", "app"]}
          direction="center"
        />
      </div>
      <AppWifiFloor />
      <Resources manual="gateway" />
    </div>
  </Layout>
)
