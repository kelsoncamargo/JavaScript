//  prototypes chain
Object.prototype.attr0 = '0' // don't this in house
const grandfather = {attr1: 'A'}
const father = {__proto__: grandfather, attr2: 'B', attr3: '3'}
const son = {__proto__: father, attr3: 'C'}

console.log(son.attr0, son.attr1, son.attr2, son.attr3)

const car = {
  speedActual: 0,
  speedMax: 200,
  speedUp(delta){
    if(this.speedActual + delta <= this.speedMax){
      this.speedActual += delta
    }else{
      this.speedActual = this.speedMax
    }
  },
  status(){
    return `${this.speedActual}Km/h of ${this.speedMax}Km/h`
  }
}

const ferrari = {
  model: 'F40',
  speedMax: 340
}

const volvo = {
  model: 'V40',
  status(){
    return `${this.model}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.speedUp(100)
console.log(volvo.status())

ferrari.speedUp(300)
console.log(ferrari.status())
