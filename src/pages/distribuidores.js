import React from "react"
import classes from "stylesheets/distributors.module.less"
import "stylesheets/main.module.less"
import banner from "images/distributors/banner.jpg"
import d1 from "images/distributors/1.png"
import d2 from "images/distributors/2.png"
import d3 from "images/distributors/3.png"
import d4 from "images/distributors/4.png"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import ContactForm from "components/ContactForm/ContactForm"

const Distributor = ({ location, address, img }) => (
  <div>
    <div>
      <p>{location}</p>
      <img src={img} alt="" />
    </div>
    <div>
      <p>{address}</p>
      <a href="#">Ir al mapa ></a>
    </div>
  </div>
)

export default () => (
  <Layout
    title="Seyo | Distribuidores"
    description="Únete a nuestra red de distribuidores o encuentra el más cercano a ti."
  >
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>DISTRIBUIDORES</h1>
      <div className={classes.banner}>
        <img src={banner} alt="Banner" />
      </div>
      <h2 className={classes.intro}>Encuentra el más cercano</h2>
      <div className={classes.distributors}>
        <Distributor
          location="CDMX"
          address="Calle 5 #45, San Pedro de los Pinos, Benito Juárez, 03800 Ciudad de México, CDMX"
          img={d1}
        />
        <Distributor
          location="EDO MEX"
          address="Av. Lomas Verdes #961. 5a. Seccion de Lomas Verdes, Naucalpan, Estado de México"
          img={d2}
        />
        <Distributor
          location="PUEBLA"
          address="25 PONIENTE #4503 Int: LOC. 25, Reforma, 72160. Puebla, Pue"
          img={d3}
        />
        <Distributor
          location="QUERÉTARO"
          address="Carretera San Luis Potosí 57, KM 11 Colonia El Salitre, 76127. Santiago de Querétaro, Qro."
          img={d4}
        />
      </div>
      <h2 className={classes.intro}>
        Integrate a la red de <b>distribuidores SEYO</b>
      </h2>
      <ContactForm />
    </div>
  </Layout>
)
