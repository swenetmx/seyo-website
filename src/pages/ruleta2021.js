import React, { useEffect, useState, lazy } from "react"
import classes from "stylesheets/ruleta.module.less"
import "stylesheets/main.module.less"
import Layout from "components/Layout/Layout"
import { navigate } from "gatsby-link"
import Suspense from "components/Suspense/Suspense"

const AsyncWheel = lazy(() => import("components/AsyncWheel/AsyncWheel"))

const prizes = [
  "¡FELICIDADES! Has ganado un 15% de descuento con el codigo SEGURIDAD15 Valido desde hoy al 30 de Mayo.",
  "Has ganado una Pelotita Seyo, acercate a nuestra ubicación para reclamarla.",
  "Uff, casi... ¡Más suerte para la próxima!",
  "¡FELICIDADES! Has ganado un 10% de descuento con el codigo SEYO10OFF Valido desde hoy al 30 de Mayo.",
  "Di no al COVID19, acercate a nuestra ubicación para solicitar tu gel antibacterial.",
  "Uff, casi... ¡Más suerte para la próxima!",
  "¡FELICIDADES! Has ganado un 20% de descuento con el codigo 20OFFSEGURIDAD. Valido desde hoy al 30 de Mayo.",
  "Di no al COVID19, acercate a nuestra  ubicación para solicitar tu KN95.",
]

export default () => {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [showPrize, setShowPrize] = useState(false)

  useEffect(() => {
    readEmail()
  }, [])

  let readEmail = () => {
    if (typeof window === "undefined") {
      return
    }
    if (window.localStorage.prizeNumber) {
      setPrizeNumber(parseInt(window.localStorage.prizeNumber))
      setShowPrize(true)
    }
  }

  const handleSpinClick = () => {
    if (typeof window === "undefined" || showPrize || mustSpin) {
      return
    }
    const newPrizeNumber = Math.floor(Math.random() * prizes.length)
    setPrizeNumber(newPrizeNumber)
    window.localStorage.prizeNumber = newPrizeNumber
    setMustSpin(true)
  }

  const data = [
    { option: "15% OFF" },
    { option: "Pelotita Seyo" },
    { option: "Uff Casi" },
    { option: "10% OFF" },
    { option: "Di no al COVID: Gel" },
    { option: "¡Para la próxima!" },
    { option: "20% OFF" },
    { option: "Di no al COVID: KN95" },
  ]

  const isSSR = typeof window === "undefined"

  return (
    <Layout
      title="Seyo | ¡Participa y gana con Seyo!"
      description=""
      canonical="/gana-con-seyo/"
    >
      <div className={classes.container}>
        <h1>¡Participa y gana con Seyo!</h1>
        <div className={classes.content}>
          <button
            disabled={showPrize}
            className="small-button-blue-pill"
            onClick={handleSpinClick}
          >
            ¡Girar Ahora!
          </button>
          <div className={classes.roulette}>
            <Suspense>
              <AsyncWheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                backgroundColors={["#dbf0f9", "whitesmoke"]}
                onStopSpinning={() => {
                  setMustSpin(false)
                  setShowPrize(true)
                }}
                outerBorderWidth={10}
                outerBorderColor="#008fc7"
                innerBorderColor="#008fc7"
                innerRadius={5}
                innerBorderWidth={5}
                radiusLineWidth={0}
                fontSize={16}
                textDistance={50}
                textColors={["#008fc7"]}
              />
            </Suspense>
          </div>
          <div
            className={[
              classes.prize,
              showPrize ? classes.prizeDisplayed : "",
            ].join(" ")}
          >
            <h2>{prizes[prizeNumber]}</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}
