import React from "react"
import classes from "./Layout.module.less"
import Nav from "components/Nav/Nav"
import PurchaseFooter from "components/PurchaseFooter/PurchaseFooter"
import Footer from "components/Footer/Footer"

export default ({
  children,
  productToPurchase,
  title,
  description,
  canonical,
}) => (
  <>
    <div className={classes.container}>
      <Nav title={title} description={description} canonical={canonical} />
      {productToPurchase ? (
        <PurchaseFooter productToPurchase={productToPurchase} />
      ) : null}
      <div className={classes.content}>{children}</div>
    </div>
    <Footer />
  </>
)
