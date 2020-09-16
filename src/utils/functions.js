import { LOCK_PRICES, PRICES, PRODUCTS } from "./prices"

export function formatMoney(
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ","
) {
  try {
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount

    const negativeSign = amount < 0 ? "-" : ""

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString()
    let j = i.length > 3 ? i.length % 3 : 0

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    )
  } catch (e) {
    console.log(e)
  }
}

export const getPriceNumber = lock => PRICES[lock]
export const getPriceString = lock => "$" + formatMoney(PRICES[lock])
export const getMinPriceString = () =>
  "$" +
  formatMoney(
    Object.entries(LOCK_PRICES).reduce(
      (acc, curr) => (acc === 0 || curr[1] < acc ? curr[1] : acc),
      0
    )
  )

export const countCartItems = () => {
  if (typeof localStorage === "undefined") return
  let cart = JSON.parse(localStorage.cart || "{}")
  return Object.keys(cart).reduce((acc, currKey) => {
    return acc + cart[currKey].amount
  }, 0)
}

export const getOrderFromStorage = () => {
  if (typeof localStorage === "undefined") return
  let cart = JSON.parse(localStorage.cart || "{}")
  return Object.keys(cart)
    .filter(key => !!cart[key].amount)
    .map(objKey => ({
      code: objKey,
      ...PRODUCTS[objKey],
      ...cart[objKey],
    }))
}
