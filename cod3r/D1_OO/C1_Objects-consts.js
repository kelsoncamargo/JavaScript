// person -> 123 -> {...}

const person = {name_person: 'John'}
person.name_person = 'Pedro'
console.log(person)

// person <- 456 -> {...}
// person = {name_person: 'Ana'}

Object.freeze(person)

delete person.name_person
person.name_person = 'Maria'
console.log(person)

