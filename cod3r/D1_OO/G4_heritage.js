function MyObject(){}
console.log(MyObject.prototype)

const obj1 = new MyObject
const obj2 = new MyObject
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MyObject.prototype === obj1.__proto__)

MyObject.prototype.name_obj = 'Anônimo'
MyObject.prototype.speak = function(){
  console.log(`Good morning! My name is ${this.name_obj}`)
}

obj1.speak()

obj2.name_obj = 'Rfael'
obj2.speak()

const obj3 = {}
obj3.__proto__ = MyObject.prototype
obj3.name_obj = 'Obj3'
obj3.speak()

//summing up to madness
console.log((new MyObject).__proto__ === MyObject.__proto__)
console.log(MyObject.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)

