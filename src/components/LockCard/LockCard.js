import React, { useEffect, useState, useRef } from "react"
import classes from "./LockCard.module.less"
import linesLeft from "images/lines/lines_locks.png"
import linesRight from "images/lines/lines_locks_flipped.png"
import UnlockMethods from "../UnlockMethods/UnlockMethods"
import { Link } from "gatsby"

let Text = ({ title, price, lineImg, methods, direction, link, subtitle }) => (
  <div className={classes.text}>
    <div className={classes.actions}>
      <div>
        <h3>{subtitle ? subtitle : "CERRADURA INTELIGENTE"}</h3>
        <h2>{title}</h2>
      </div>
      <div>
        <span className={classes.price}>{price}</span>
        <Link to={link}>VER DETALLES</Link>
      </div>
      <img src={lineImg} alt="" className={classes.lines} />
    </div>
    <UnlockMethods methods={methods} direction={direction} />
  </div>
)

export default ({ direction, title, img, price, methods, link, subtitle }) => {
  let [scrolled, setScrolled] = useState(false)
  const element = useRef(null)

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", e => {
        let offsetDocument = element.current
          ? element.current.getBoundingClientRect()
          : {}
        if (0 > offsetDocument.top - window.innerHeight + 300 && !scrolled) {
          setScrolled(true)
        }
      })
    }
  }, [])

  return (
    <div
      className={[classes.container, scrolled ? classes.visible : ""].join(" ")}
      ref={element}
    >
      {direction == "left" ? (
        <div className={classes.contentLeft}>
          <Text
            title={title}
            price={price}
            lineImg={linesRight}
            methods={methods}
            direction={direction}
            link={link}
            subtitle={subtitle}
          />
          <img src={img} alt="Cerradura" />
        </div>
      ) : (
        <div className={classes.contentRight}>
          <img src={img} alt="Cerradura" />
          <Text
            title={title}
            price={price}
            lineImg={linesLeft}
            methods={methods}
            direction={direction}
            link={link}
            subtitle={subtitle}
          />
        </div>
      )}
    </div>
  )
}
