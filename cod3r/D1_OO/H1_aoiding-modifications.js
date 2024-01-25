// Object.preventExtensions
const prod = Object.preventExtensions({
  name_prod: 'Any', price: 1.99, tag: 'promotion'
})
console.log('Extendable', Object.isExtensible(prod))

prod.name_prod = 'Rubber'
prod.name_prod = 'White school rubber'
delete prod.tag
console.log(prod)

//Object.seal
const person = {name_person: 'Juliana', age: 35}
Object.seal(person)
console.log('sealed:', Object.isSealed(person))

person.last_name = 'Silva'
delete person.name_person
person.age = 29
console.log(person)