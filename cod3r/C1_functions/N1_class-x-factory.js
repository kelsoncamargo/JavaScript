class Person{
  constructor(fisrt_name){
    this.fisrt_name = fisrt_name
  }

  speak(){
    console.log(`My name is ${this.fisrt_name}`)
  }
}

const p1 = new Person('John')
p1.speak()

const creatPerson = fisrt_name => {
  return{
    speak: () => console.log(`My name is ${fisrt_name}`)
  }
}

const p2 = creatPerson('John')
p2.speak()
