function Person(fisrt_name){
  this.fisrt_name = fisrt_name


  this.speak = function(){
    console.log(`My name is ${this.fisrt_name}`)
  }
}

const p1 = new Person('John')
p1.speak()