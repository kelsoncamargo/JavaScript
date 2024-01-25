const ferrari = {
  model: 'F40',
  speedUpMax: 324
}

const volvo = {
  model: 'V40',
  speedUpMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ == Object.prototype)

console.log(volvo.__proto__)
console.log(volvo.__proto__ == Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MyObj(){}

console.log(typeof Object, typeof MyObj)
console.log(Object.prototype, MyObj.prototype)