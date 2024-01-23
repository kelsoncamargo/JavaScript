function area(widht, height){
  const area = widht * height
  if(area > 20){
    console.log(`The value above the permited amout: ${area}.m2.`)
  }else{
    return area
  }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 7, 22, 44))
console.log(area(5, 5))

