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
      </Helmet>
    ) : null}
    <div className={classes.container}>
      <div className={classes.content}>
        <NavContent />
      </div>
    </div>
  </Fragment>
)
