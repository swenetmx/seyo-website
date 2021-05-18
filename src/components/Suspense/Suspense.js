import React, { Suspense } from "react"
import classes from "./Suspense.module.less"

export default ({ children, fallback }) =>
  typeof window !== "undefined" ? (
    <Suspense fallback={fallback ? fallback : <div className={classes.spinner}></div>}>{children}</Suspense>
  ) : null
