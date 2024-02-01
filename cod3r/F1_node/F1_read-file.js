const fs = require('fs')

const way = __dirname + '/A0_file.json'

// sincronous
const content = fs.readFileSync(way, 'utf-8')
console.log(content)

//asyncronous
fs.readFile(way, 'utf-8', (err, content)=> {
  const config = JSON.parse(content)
  console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./A0_file.json')
console.log(config.db)
 
fs.readdir(__dirname, (err, files) => {
  console.log('Folder Content')
  console.log(files)
})