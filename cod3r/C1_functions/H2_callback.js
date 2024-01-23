const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//without callback
let lowGrades = []
for(let grade in grades){
  if(grades[grade] < 7){
    lowGrades.push(grades[grade])
  }
}

console.log(lowGrades)

lowGrades = grades.filter(grade => grade < 7)
console.log(lowGrades)
