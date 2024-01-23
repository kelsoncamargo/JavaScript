const grades = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let grade in grades){
  console.log(grades[grade])
}

const person = {
  name_person: 'Ana',
  last_name: 'Silva',
  age: 29,
  weight: 64
}

for(let attribute in person){
  console.log(`${attribute} = ${person[attribute]}`)
}