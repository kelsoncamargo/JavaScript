function Person(){
  this.age = 0
  
  setInterval(() => {
    this.age ++
    console.log(this.age)
  }/*.bind(this)*/, 1000)
}

new Person

