import React from "react"
import ReactDOM from "react-dom"
import scriptLoader from "react-async-script-loader"

const CLIENT = {
  sandbox:
    "ATtCcMdOrupEBVxY8Wn3CaNzmswgnasFD9vZTMPu0hq--FBPfC-juTzFe2eOCwL3KKhF8ooRRar523Pp",
  production:
    "AYXOqRUfWU1KrAknRKBYJxhboFTgLrhhaSg-0ExoPcE7grLqlEaEDAqetDzaf0ury9Ht8U8bsTuIU3ie",
}

const CLIENT_ID =
  process.env.NODE_ENV !== "production" ? CLIENT.production : CLIENT.sandbox

let PayPalButton = null

class PaypalButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }

    window.React = React
    window.ReactDOM = ReactDOM
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM })
      this.setState({ loading: false })
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps

    const scriptJustLoaded =
      this.state.loading && !this.props.isScriptLoaded && isScriptLoaded

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM,
        })
        this.setState({ loading: false })
      }
    }
  }
  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "Mercedes G-Wagon",
          amount: {
            currency_code: "MXN",
            value: 200,
          },
        },
      ],
    })
  }

  onApprove = (data, actions) => {
    actions.order.capture().then(details => {
      console.log("Payment Approved: ", details)
    })
  }

  render() {
    const { loading } = this.state

    return (
      <div className="main">
        {loading ? (
          "..."
        ) : (
          <PayPalButton
            createOrder={(data, actions) => this.createOrder(data, actions)}
            onApprove={(data, actions) => this.onApprove(data, actions)}
          />
        )}
      </div>
    )
  }
}

export default scriptLoader(
  `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&currency=MXN`
)(PaypalButton)
