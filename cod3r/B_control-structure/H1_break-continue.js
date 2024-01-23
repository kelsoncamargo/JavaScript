const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in numbers){
  if (x == 5){
    break
  }
  console.log(`${x} = ${numbers[x]}`)
}

for(let y in numbers){
  if(y == 5){
    console.log('--------------------')
    continue
  }
  console.log(`${y} = ${numbers[y]}`)
}