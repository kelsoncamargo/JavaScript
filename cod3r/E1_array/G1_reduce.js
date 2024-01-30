const students = [
  {student_name: 'João', note: 7.3, holder: false},
  {student_name: 'Maria', note: 9.2, holder: true},
  {student_name: 'Pedro', note: 9.8, holder: false},
  {student_name: 'Ana', note: 8.7, holder: true},
]

const result = students.map(a => a.note).reduce((accumulator, current) => {
  console.log(accumulator, current)
  return accumulator + current
}, 0)

console.log(result)