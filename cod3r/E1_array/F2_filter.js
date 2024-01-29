Array.prototype.filter2 = function(callback){
  const newArray = []
  for(let i = 0; i < this.length; i++){
    if(callback(this[i], i, this)){
      newArray.push(this[i])
    }
    return newArray
  }
}

const prod = [
  {nameProd: 'Notebook', price: 2499, fragile: true},
  {nameProd: 'iPda Pro', price: 4199, fragile: true},
  {nameProd: 'plastic cup', price: 12.49, fragile: false}
]

const highPrice = prod => prod.price >= 500
const fragile = prod => prod.fragile

console.log(prod.filter2(highPrice))
console.log(prod.filter2(fragile))
