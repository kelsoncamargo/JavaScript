const father = { person_name: 'Pedro', hair_color: 'Black'  }

const doughter = Object.create(father)
doughter.person_name = 'Ana'
console.log(doughter.hair_color)

const doughter2 = Object.create(father, {
  person_name: {value: 'Bia', writable: false, enumerable: true}
})

console.log(doughter2.person_name)
doughter2.person_name = 'Carla'
console.log(`${doughter2.person_name} have hair ${doughter2.hair_color}`)

console.log(Object.keys(doughter))
console.log(Object.keys(doughter2))

for(let key in doughter2){
  doughter2.hasOwnProperty(key) ?
    console.log(key) : console.log(`By inheritance: ${key}`)
}