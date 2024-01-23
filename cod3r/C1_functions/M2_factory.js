// Simple Factory

function createPerson(name = 'any', lastName = 'any'){
  return{
    namePerson: name,
    lastName,
    discount: 10
  }
}

console.log(createPerson('kelson', 'Camargo'))