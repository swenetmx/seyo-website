import React from "react"
import "stylesheets/main.module.less"
import classes from "stylesheets/accesories.module.less"
import Layout from "components/Layout/Layout"
import banner from "images/accesories/banner.png"
import gateway from "images/accesories/gateway2.png"
import balder from "images/accesories/BALDER/balder.png"
import frigg from "images/accesories/FRIGG20/frigg.png"
import enok from "images/accesories/ENOK20/enok.png"
import casper from "images/accesories/CASPER20/casper.png"
import tarjeta from "images/accesories/tarjeta.png"
import { getPriceString } from "utils/functions"
import LockCard from "components/LockCard/LockCard"

export default () => (
  <Layout
    title="Seyo | Otros Productos"
    description="Da un paso más hacia la automatización doméstica."
    canonical="/otros-productos/"
  >
    <div className={classes.container}>
      <div className={classes.locksBanner}>
        <h1>Otros Productos</h1>
        <div className={classes.banner}>
          <h2>
            Da <b>un paso</b> más hacia la <b>automatización doméstica</b>
          </h2>
          <img src={banner} alt="Otros productos" />
        </div>
      </div>
      <h2>
        Protege lo que más te importa con <b>SEYO</b>.
      </h2>
      <div className={classes.allLocks}>
        <LockCard
          subtitle="CONECTIVIDAD WIFI"
          link="/otros-productos/gateway/"
          direction="left"
          title="GATEWAY"
          img={gateway}
          price={getPriceString("GATEWAY")}
          methods={["wifi"]}
        />
        <LockCard
          subtitle="TARJETAS DE ACCESO"
          link="/otros-productos/tarjetas-rf/"
          direction="right"
          title="TARJETAS RF"
          img={tarjeta}
          price={getPriceString("TARJETAS_RF")}
          methods={["tarjeta"]}
        />
        <LockCard
          subtitle="GAVETA CON LECTOR BIOMÉTRICO"
          link="/otros-productos/balder/"
          direction="left"
          title="BALDER"
          img={balder}
          price={getPriceString("BALDER")}
          methods={["huella", "codigo", "llave"]}
        />
        <LockCard
          subtitle="VIDEOPORTERO"
          link="/otros-productos/frigg20/"
          direction="right"
          title="FRIGG20"
          img={frigg}
          price={getPriceString("FRIGG20")}
        />
        <LockCard
          subtitle="CÁMARA"
          link="/otros-productos/enok20/"
          direction="left"
          title="ENOK20"
          img={enok}
          price={getPriceString("ENOK20")}
        />
        <LockCard
          subtitle="CÁMARA"
          link="/otros-productos/casper20/"
          direction="right"
          title="CASPER20"
          img={casper}
          price={getPriceString("CASPER20")}
        />
      </div>
    </div>
  </Layout>
)
