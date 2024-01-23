// Create Literally
function fun1(){}

// storage in variable
const fun2 = function () {}

// Storage in array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Storage in object attribute
const obj = {}
obj.speak = function() { return 'Opa' }
console.log(obj.speak)

// Pass function as param
function run(fun){
  fun()
}

run(function(){console.log('Running...')})

// A function can return/contain a function
function sum(a, b){
  return function(c){
    console.log(a + b + c)
  }
}

sum(2, 3)(4)
const fiveMore = sum(2, 3)
fiveMore(4)