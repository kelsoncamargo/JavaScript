function getRandomIntValueBetween(min ,max) {
  const value = Math.random() * (max - min) + min
  return Math.floor(value)
}

let option = 0

do{
  option = getRandomIntValueBetween(-1, 10)
  console.log(option)
}while( option != -1)

console.log('to the next')