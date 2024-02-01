const fs = require('fs')

const prod = {
  prod_name: 'Phone',
  price: 1249.99,
  discount: 0.15
}

fs.writeFile(__dirname + '/F2_generated-file.json', JSON.stringify(prod), err => {
  console.log(err || 'File saved')
})