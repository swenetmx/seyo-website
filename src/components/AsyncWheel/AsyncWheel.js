import React from "react"
import { Wheel } from "react-custom-roulette"

export default props => (Wheel ? <Wheel {...props} /> : <h5></h5>)
