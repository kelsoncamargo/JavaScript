// new resource do ES2015

const people = {
  name_people: 'Ana',
  age: 5,
  address: {
    public_place: 'ABC street',
    number: 1000
  }
} 

const {name_people, age} = people 
console.log(name_people, age)

const {name_people: n, age: a} = people
console.log(n, a)

const {last_name, good_humored = false } = people
console.log(last_name, good_humored) 

const {address: {public_place, number, cep}} = people
console.log(public_place, number, cep)