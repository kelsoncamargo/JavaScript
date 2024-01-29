const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilots.pop()
console.log(pilots)

pilots.push('Verstappen')
console.log(pilots)

pilots.shift() // remove element one in array
console.log()

pilots.unshift('Hamilton') // add one new element to index 0 in array
console.log(pilots)

// ADD
pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

// remove
pilots.splice(3, 1) 
console.log(pilots)

const anyPilots = pilots.slice(2) // new array
console.log(anyPilots)

const anyPilots2 = pilots.slice(1 ,4)
console.log(anyPilots2)
