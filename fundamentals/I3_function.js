// storing a function in a variable

const printSum = function(a, b) {
  console.log(a + b)
}

printSum(2, 3)

// Storing a arrow function in a variable
const sum = (a, b) => {
  return a + b
}

console.log(2, 3)

// implicit return
const subtrac = (a, b) => a - b
console.log(subtrac(2, 3))

const print = a => console.log(a)
print('Cool')