const tech = new Map()
tech.set('react', {framework: false})
tech.set('angular', {framework: true})

console.log(tech.react)
console.log(tech.get('react'))
console.log(tech.get('react').framework)
