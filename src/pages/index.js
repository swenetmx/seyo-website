import React, { Fragment, useState, useEffect } from "react"
import "stylesheets/main.module.less"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "components/Layout/Layout"
import Carousel from "components/Carousel/Carousel"
import LockBanner from "components/LockBanner/LockBanner"
import HomeLocks from "components/HomeLocks/HomeLocks"
import img1 from "images/banners/freya_home.jpg"
import img2 from "images/banners/not_home.jpg"
import img3 from "images/banners/syn_home.jpg"
import otros_productos from "images/banners/otros_productos.png"
import locks_all from "images/banners/locks_all_cropped.jpg"
import classes from "stylesheets/index.module.less"
import { getPriceString } from "utils/functions"
import { Link } from "gatsby"
import { addToCart } from "components/Cart/Cart"

export const useLocalStorage = (key, defaultValue) => {
  const stored =
    typeof window === "undefined" ? undefined : window.localStorage.getItem(key)
  const initial = stored ? JSON.parse(stored) : defaultValue
  const [value, setValue] = useState(initial)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }, [key, value])
  return [value, setValue]
}

const IndexPage = () => {
  return (
    <Layout
      title="Seyo México"
      description="Abre la puerta al futuro, abre la puerta a SEYO."
      canonical="/"
    >
      <div className={classes.carousel}>
        <Carousel
          items={[
            <LockBanner
              img={img1}
              label="Cerradura Inteligente"
              title="FREYA19"
              price={getPriceString("FREYA19")}
              actions={[
                {
                  title: "CONOCE MÁS",
                  url: "/cerraduras/freya19",
                },
                {
                  title: "COMPRA YA",
                  onClick: () => addToCart("FREYA19"),
                },
              ]}
            />,
            <LockBanner
              img={img2}
              label="Cerradura Inteligente"
              title="NOT19"
              price={getPriceString("NOT19")}
              actions={[
                {
                  title: "CONOCE MÁS",
                  url: "/cerraduras/not19",
                },
                {
                  title: "COMPRA YA",
                  onClick: () => addToCart("NOT19"),
                },
              ]}
            />,
            <LockBanner
              img={img3}
              label="Cerradura Inteligente"
              title="SYN19"
              price={getPriceString("SYN19")}
              actions={[
                {
                  title: "CONOCE MÁS",
                  url: "/cerraduras/syn19",
                },
                {
                  title: "COMPRA YA",
                  onClick: () => addToCart("SYN19"),
                },
              ]}
            />,
          ]}
        />
      </div>
      <div className={classes.locksBanner}>
        <Link to="/cerraduras">
          <div>
            <h2>
              Cerraduras Inteligentes <b>SEYO</b>
            </h2>
            <h3>
              Desde <b>$3,580.00</b>
            </h3>
          </div>
          <img src={locks_all} alt="Nuestras Cerraduras" />
        </Link>
      </div>
      <HomeLocks />
      <LockBanner
        img={otros_productos}
        title={<span className={classes.finalSubtitle}>Otros Productos</span>}
        darkText
        price={
          <Fragment>
            Desde <b>$3,580.00</b>
          </Fragment>
        }
        actions={[
          {
            title: "CONOCE MÁS",
            url: "/otros-productos",
            blue: true,
          },
        ]}
      />
    </Layout>
  )
}
export default IndexPage
