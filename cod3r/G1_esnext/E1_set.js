// DOES NOT ACCPET REPETITION
const teams = new Set()

teams.add('Vasco')
teams.add('São Paulo').add('Palmeiras').add('Corinthias')
teams.add('Flamento')
teams.add('Vasco')

console.log(teams)
console.log(teams.size)
console.log(teams.has('Vasco'))
console.log(teams.has('Vasco'))
teams.delete('Flamento')
console.log(teams)