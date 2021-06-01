import React from "react"
import classes from "./HomeLocks.module.less"
import syf from "images/locks/syf/syf_flipped.png"
import tyr from "images/locks/tyr/tyr.png"
import LockCard from "components/LockCard/LockCard"
import LineSubtitle from "components/LineSubtitle/LineSubtitle"
import { getPriceString } from "utils/functions"

export default () => (
  <div className={classes.container}>
    <LineSubtitle>Los Más Vendidos.</LineSubtitle>
    <LockCard
      direction="right"
      title="SYF19"
      link="/cerraduras/syf19"
      img={syf}
      price={getPriceString("SYF19")}
    />
    <LockCard
      direction="left"
      link="/cerraduras/tyr19"
      title="TYR19"
      img={tyr}
      price={getPriceString("TYR19")}
    />
  </div>
)
