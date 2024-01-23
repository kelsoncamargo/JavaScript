function Car(maxSPeed = 200, delta = 5){
  // privete attribute
  let actualSpeed = 0

  // public method
  this.speedUp = function () {
    if(actualSpeed + delta <= maxSPeed){
      actualSpeed += delta
    }else{
      actualSpeed = maxSPeed
    }
  }

  // public method
  this.getAcutalSpeed = function(){
    return actualSpeed
  }

} 

const uno = new Car
uno.speedUp()
console.log(uno.getAcutalSpeed())

const ferrai = new Car(350, 20)
ferrai.speedUp()
ferrai.speedUp()
ferrai.speedUp()
console.log(ferrai.getAcutalSpeed())

console.log(typeof Car)
console.log(typeof ferrai)