import React from "react"
import classes from "stylesheets/support.module.less"
import "stylesheets/main.module.less"
import banner from "images/community/banner.jpg"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import ContactForm from "components/ContactForm/ContactForm"

export default () => (
  <Layout
    title="Seyo | Comunidad"
    description="Suscribete a la comunidad SEYO"
    canonical="/comunidad/"
  >
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>COMUNIDAD</h1>
      <img src={banner} alt="Banner" />
      <h2 className={classes.intro}>
        Suscribete a la comunidad <b>SEYO</b>
      </h2>
      <ContactForm />
    </div>
  </Layout>
)
