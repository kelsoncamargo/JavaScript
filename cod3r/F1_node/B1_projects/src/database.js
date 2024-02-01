const sequence = {
  _id: 1,
  get id() {return this._id++}
}

const products = {}

function saveProd(prod){
  if(!prod.id){
    prod.id = sequence.id
  }
  products[prod.id] = prod
  return prod
}

function getProd(id){
  return products[id] || {}
}

function getProducts(){
  return Object.values(products)
}

function deleteProd(id){
  const prod = products[id]
  delete products[id]
  return prod
}

module.exports = {
  saveProd,
  getProd,
  getProducts,
  deleteProd
}