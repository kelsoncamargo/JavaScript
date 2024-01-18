// name value pair
const salutation = 'Opa' // lexical context 1

function exec(){
  const salutation = 'Speaks' // lexical context 2
  return salutation
}

// Objectes are nested groups of the namr value pair 
const client = {
  name: 'Pedro',
  age: 32,
  weight: 90,
  address: {
    public_place: 'Very cool street',
    number: 123
  }
}

console.log(salutation)
console.log(exec())
console.log(client)