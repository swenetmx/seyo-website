import React from "react"
import classes from "stylesheets/support.module.less"
import "stylesheets/main.module.less"
import banner from "images/support/banner.jpg"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import ContactForm from "components/ContactForm/ContactForm"
import Resources from "components/Resources/Resources2"

export default () => (
  <Layout title="Seyo | Soporte" description="" canonical="/soporte/">
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>SOPORTE</h1>
      <img src={banner} alt="Banner" />
      <div className={classes.text}>
        <p></p>
      </div>
      <h5>RECURSOS</h5>
      <Resources />
      <h5>CONTÁCTANOS</h5>
      <ContactForm />
    </div>
  </Layout>
)
