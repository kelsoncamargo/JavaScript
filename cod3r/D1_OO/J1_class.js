class Lauch {
  constructor(name_lauch = 'Any', value = 0){
    this.name_lauch = name_lauch
    this.value = value
  }
}

class Financial_Cycle {
  constructor(month, year){
    this.month = month
    this.year = year
    this.lauchs = []
  }

  addLauchs(...lauchs){
    lauchs.forEach(l => this.lauchs.push(l))
  }

  sumary(){
    let consolidated_value = 0
    this.lauchs.forEach( l => {
      consolidated_value += l.value
    })
    return consolidated_value
  }
}

const salary = new Lauch('Salary', 45000)
const electricityBill = new Lauch('Light', -220)

const bill = new Financial_Cycle(6, 2018)
bill.addLauchs(salary, electricityBill) 
console.log(bill.sumary())