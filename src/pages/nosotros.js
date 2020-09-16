import React from "react"
import classes from "stylesheets/about.module.less"
import "stylesheets/main.module.less"
import banner from "images/about/banner.jpg"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import seyo_logo from "images/logo.png"
import sn_logo from "images/about/sn.png"

export default () => (
  <Layout
    title="Seyo | Nosotros"
    description="Comprometidos con desarrollar la mejor tecnología de seguridad y proveer la mayor tranquilidad a nuestros clientes bajo el respaldo de ingeniería sueca en cada uno de nuestros productos."
  >
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>SOBRE NOSOTROS</h1>
      <img src={banner} alt="Banner" />
      <h2 className={classes.intro}>
        <b>SEYO</b> es una empresa de <span>SwedishNet</span>
      </h2>
      <div className={classes.content}>
        <img src={sn_logo} alt="Swedish Net Logo" />
        <p>
          <span>Swedish Net</span> ofrece servicios y contratos para
          instalaciones y funciones socialmente importantes que, debido a su
          imagen de amenaza, tienen altas demandas de{" "}
          <b>seguridad y tecnología.</b>{" "}
        </p>
        <br />
        <p>
          Durante 20 años, hemos entregado soluciones a autoridades, objetos
          protegidos y otra infraestructura crítica. Todos nuestros clientes
          necesitan un conocimiento especial con respecto a la seguridad de la
          planta debido, por ejemplo, al terrorismo y otras amenazas
          antagónicas, así como conocimiento con respecto a la{" "}
          <b>seguridad operativa</b> con respecto a su responsabilidad por el
          funcionamiento de funciones críticas.
        </p>
        <a
          href="https://swedishnet.se/"
          target="_blanck"
          rel="noopener noreferrer"
        >
          CONOCE MÁS >
        </a>
      </div>
      <div className={classes.content}>
        <img src={seyo_logo} alt="Seyo Logo" />
        <p>
          <b>SEYO</b> es la marca de{" "}
          <b>productos tecnológicos y de seguridad</b> de{" "}
          <span>SWEDISH NET MX</span>, empresa sueca establecida en México,
          especialista en protección física y técnica para instalaciones con
          <b>altos requerimientos de seguridad</b>.
        </p>
        <br />
        <p>
          Comprometidos con desarrollar la <b>mejor tecnología de seguridad</b>{" "}
          y proveer la mayor tranquilidad a nuestros clientes bajo el respaldo
          de ingeniería sueca en cada uno de nuestros productos. <b>SEYO</b> es
          una marca que busca reforzar la importancia de la{" "}
          <b>protección física de las familias mexicanas</b>, mediante
          dispositivos que cumplen con los estándares de calidad Suecos que la
          empresa madre, <span>Swedish Net</span>.
        </p>
      </div>
    </div>
  </Layout>
)
