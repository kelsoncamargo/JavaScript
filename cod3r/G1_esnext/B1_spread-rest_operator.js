// USE SPREAD WITH OBJ
const employd = {
  name_employd: 'Maria', 
  salary: 12348.99
}
console.log(employd)

const clone = {active: true, ...employd}
console.log(clone)

// USE SPREAD WITH ARRAY
const groupA = ['João', 'Pedro', 'Gloria']
console.log(groupA)
const finalGroup = ['Maria', ...groupA, 'Rafael']
console.log(finalGroup)