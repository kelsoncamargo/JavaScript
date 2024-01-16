var a = 3
/**
 * As a general rule, use @let to declare variables
 */
let b = 4

var a = 30
b = 40
console.log(a, b)

a = 300
b = 400
console.log(a, b)

/**
 * As it @const, it cannot assign the value
 */
const c = 5
// c = 500
console.log(c)