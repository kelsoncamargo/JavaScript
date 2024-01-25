// Is dynamic collection of the pair key/value
const prod = new Object
prod.name_prod = 'Chair'
prod['Product brand'] = 'Any'
prod.price = 220

console.log(prod)
delete prod.price
delete prod['Product brand']
console.log(prod)

const car = {
  model: 'A4',
  value: 89000,
  owners: {
    name_owners: 'Raul',
    age: 56,
    address: {
      public_place: 'ABC STREET',
      number: 123
    }
  },
  conductors: [{
    name_conductor: 'Junior',
    age: 19
  },{
    name_conductor: 'Ana',
    age: 42
   }
  ]
}

car.owners.address.number = 100
car['owners']['address']['public place'] = 'Av Gigante'
console.log(car)

delete car.conductors
delete car.owners.address

console.log(car)