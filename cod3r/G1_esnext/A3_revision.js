const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

const name_user = 'Carla'
const person = {
  name_user,
  hello(){
    return 'hello people'
  }
}

console.log(person.name_user, person.hello())

class Animal {}
class Dog extends Animal{
  speak(){
    return 'Au au'
  }
}

console.log(new Dog().speak())