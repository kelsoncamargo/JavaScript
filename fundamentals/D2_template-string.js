const userName = 'Rebeca'
const concate = 'Olá ' + userName + '!' 
const template = `
    Olá
    ${userName}!
  `
console.log(concate, template)

//expressions
console.log(`1 + 1 = ${1 + 1}`)

const up = text => text.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)