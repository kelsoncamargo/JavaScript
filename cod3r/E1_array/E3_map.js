Array.prototype.map2 = function(callback){
  const newArray = []
  for(let i = 0; i < this.length; i++){
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const cart = [
  '{"name": "Rubber", "price": 3.45}',
  '{"name": "Book", "price": 13.90}',
  '{"name": "pencil kit", "price": 41.22}'
]

handleCart = cart.map2((item) => {
  return JSON.parse(item)
})

prices = handleCart.map2(item => {
  return item.price
})

console.log(prices)