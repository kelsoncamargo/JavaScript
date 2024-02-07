// TAGGED TAMPLATES 
function tag(parts, ...values){
  console.log(parts)
  console.log(values)
  return 'Outra String'
}

const student = 'Gui'
const situation = 'Approved'
console.log(tag `${student} it is ${situation}`)