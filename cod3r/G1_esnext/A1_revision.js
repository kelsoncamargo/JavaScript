// let and const 
{
  var a = 2
  let b = 3
  console.log(b)
}
console.log(a)

// Template String
const prod = 'iPad'
console.log(`${prod} is expensive`)

// Destructuring

const[l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const {age: i, name_user} =  {name_user: 'Ana', age: 9}
console.log(i, name_user)