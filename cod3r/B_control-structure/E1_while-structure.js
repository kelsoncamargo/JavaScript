function getRandomIntValueBetween(min ,max) {
  const value = Math.random() * (max - min) + min
  return Math.floor(value)
}

let option = 0

while( option != -1){
  option = getRandomIntValueBetween(-1, 10)
  console.log(option)
}

console.log('to the next')