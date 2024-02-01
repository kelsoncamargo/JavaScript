const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/products', (req, res, next) => {
  res.send(database.getProducts())
})

app.get('/products/:id', (req, res, next) => {
  res.send(database.getProd(req.params.id))
})

app.post('/products', (req, res, next) => {
  const prod = database.saveProd({
    product_name: req.body.product_name,
    price:  req.body.price
  })
  res.send(prod) //JSON
})

app.put('/products/:id', (req, res, next) => {
  const prod = database.saveProd({
    id: req.params.id,
    product_name: req.body.product_name,
    price:  req.body.price
  })
  res.send(prod) //JSON
})

app.delete('/products/:id', (req, res, next) => {
  const prod = database.deleteProd(req.params.id)
  res.send(prod) //JSON
})

app.listen(port, () => {
  console.log(`Server run on port ${port}`)
})