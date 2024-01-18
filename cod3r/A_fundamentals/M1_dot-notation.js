console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nameObj = 'Ball'
// obj1[nameObj] = 'Ball2'
console.log(obj1.name)

function Obj(name){
  this.name = name
  this.exec = function(){
    console.log('Exec')
  }
}

const obj2 = new Obj('Chair')
const obj3 = new Obj('Table')
console.log(obj2)
console.log(obj3)
obj3.exec()