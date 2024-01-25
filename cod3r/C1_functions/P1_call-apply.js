function getPrice(taxes = 0, coin = 'R$'){
  return `${coin} ${this.price * (1 - this.desc) * (1 + taxes)}`
}

const prod = {
  name_prod: 'Notebook',
  price: 4589,
  desc: 0.15,
  getPrice
}

global.price = 20
global.desc = 0.1

console.log(getPrice())
console.log(prod.getPrice())

const car = {price: 49990, desc: 0.20}

console.log(getPrice.call(car))
console.log(getPrice.apply(car))

console.log(getPrice.call(car, 0.17, 'U$'))
console.log(getPrice.apply(car, [0.17, 'U$']))
