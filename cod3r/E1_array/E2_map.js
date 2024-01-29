const cart = [
  '{"name": "Rubber", "price": 3.45}',
  '{"name": "Book", "price": 13.90}',
  '{"name": "pencil kit", "price": 41.22}'
]

handleCart = cart.map((item) => {
  return JSON.parse(item)
})

prices = handleCart.map(item => {
  return item.price
})

console.log(prices)