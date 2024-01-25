const person = {
  name_person: 'Rebeca',
  age: 2,
  weight: 13
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

Object.entries(person).forEach( e => {
  console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`)
})

Object.defineProperty(person, 'date_birth', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
})

person.date_birth = '01/01/2017' 
console.log(person.date_birth)

const dest = {a : 1}
const o1 = {b: 2}
const o2 = {c: 3}
const obj = Object.assign(dest, o1, o2)
console.log(obj)