import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import classes from "./Nav.module.less"
import NavContent from "../NavContent/NavContent"

export default ({ title, description }) => (
  <Fragment>
    {title ? (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          rel="canonical"
          href={typeof window !== "undefined" ? window.location.href : ""}
        />
        <html lang="es" />
        <meta name="description" content={description} />

        <meta
          property="og:image"
          content={`http://${
            typeof window !== undefined ? window.location.hostname : "seyo.mx"
          }/locks.jpg`}
        />
        <meta
          property="og:image:secure_url"
          content={`https://${
            typeof window !== undefined ? window.location.hostname : "seyo.mx"
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
