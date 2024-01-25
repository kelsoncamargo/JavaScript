class Grand_Father {
  constructor(last_name){
    this.last_name = last_name
  }
}

class Father extends Grand_Father{
  constructor(last_name, profission = 'Teacher'){
    super(last_name)
    this.profission = profission
  }
}

class Son extends Father {
  constructor(){
    super('Silva')
  }
}

const son = new Son
console.log(son)