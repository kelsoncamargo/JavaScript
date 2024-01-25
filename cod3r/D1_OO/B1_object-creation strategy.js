//using literal notation
const obj1 = {}
console.log(obj1)

// Object in js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

function Product(name_prod, price, disc){
  this.name_prod = name_prod

  this.getPriceWithDisc = () => {
    return price * (1 - disc)
  }
}

const p1 = new Product('Pen', 7.99, 0.15)
const p2 = new Product('Notebook', 2998, 0.15)
console.log(p1.getPriceWithDisc(), p2.getPriceWithDisc())

function employeeCreat(name_employee, base_salary, fouls){
  return{
    name_employee,
    base_salary,
    fouls,
    getSalary(){
    return (base_salary / 30 ) * ( 30 - fouls)
    }
  }
}

const f1 = employeeCreat('John', 7980, 4)
const f2 = employeeCreat('Maria', 11400, 1)
console.log(f1.getSalary(), f2.getSalary())

// Object.create
const doughter = Object.create(null)
doughter.name_doughter = 'Ana'
console.log(doughter)

// A famous function what Object return...
const fromJSON = JSON.parse('{"info": "I am a JSON"}')
console.log(fromJSON.info)

