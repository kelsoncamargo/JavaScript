// Strategy 1 to generate default value
function sum1(a, b ,c){
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c
}

console.log(sum1)
console.log(sum1(3))
console.log(sum1(1, 2, 3))
console.log(sum1(0, 0, 0))

// Strategy tow, three and four to create the default value
function sum2(a, b, c){
  a = a !== undefined ? a : 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c
  return a + b + c
}

console.log(sum2())
console.log(sum2(3))
console.log(sum2(1, 2, 3))
console.log(sum2(0, 0, 0))

// The value default of the es2015
function sum3(a = 1, b = 3, c = 1){
  return a + b + c
}

console.log(sum3())
console.log(sum3(3))
console.log(sum3(1, 2, 3))
console.log(sum3(0, 0, 0))
