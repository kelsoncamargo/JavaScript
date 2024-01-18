let value // uninitialized
console.log(value)

value = null // absence of value
console.log(value)
// console.log(value.toString())

const prod = {}
console.log(prod.price)
// console.log(prod.price.a)
console.log(prod)

prod.price = 3.50
console.log(prod)

prod.price = undefined // avoid defining undefined user 0 or null
console.log(!!prod.price)
// delete prod.price
console.log(prod)

prod.price = null // whitout price
console.log(!!prod.price)
console.log(prod)