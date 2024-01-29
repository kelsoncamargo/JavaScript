const prod = [
  {nameProd: 'Notebook', price: 2499, fragile: true},
  {nameProd: 'iPda Pro', price: 4199, fragile: false},
  {nameProd: 'plastic cup', price: 12.49, fragile: false}
]

console.log(prod.filter( e => {
  return false
}))

const highPrice = prod => prod.price >= 500
const fragile = prod => prod.fragile

console.log(prod.filter(highPrice))
console.log(prod.filter(fragile))
