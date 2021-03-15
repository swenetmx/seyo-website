import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import classes from "./Nav.module.less"
import NavContent from "../NavContent/NavContent"
import whatsapp from "images/whatsapp.svg"

export default ({ title, description, canonical }) => (
  <Fragment>
    <a
      href="https://api.whatsapp.com/send?phone=+5212215985710&text=Estoy%20interesado%20en%20sus%20productos."
      rel="noopener noreferrer"
      className={classes.whatsapp}
      target="_blank"
    >
      <img src={whatsapp} alt="Whatsapp Icon" />
    </a>
    {title ? (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href={`https://seyo.mx${canonical}`} />
        <html lang="es" />
        <meta name="description" content={description} />

        <meta
          property="og:image"
          content={`http://${
            typeof window !== "undefined" ? window.location.hostname : "seyo.mx"
          }/locks.jpg`}
        />
        <meta
          property="og:image:secure_url"
          content={`https://${
            typeof window !== "undefined" ? window.location.hostname : "seyo.mx"
          }/locks.jpg`}
        />
      </Helmet>
    ) : null}
    <div className={classes.container}>
      <div className={classes.content}>
        <NavContent />
      </div>
    </div>
  </Fragment>
)
