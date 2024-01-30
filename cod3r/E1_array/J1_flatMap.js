const school = [
  {
    class_name: 'Turma M1',
    students: [{
      student_name: 'Gustavo',
      note: 8.1
      },
      {
        student_name: 'Ana',
        note: 9.3
      }
    ]
  },
  {
    class_name: 'Turma M2',
    students: [{
      student_name: 'Rebeca',
      note: 8.9,
      },
      {
        student_name: 'Roberto',
        note: 7.3
      }
    ]
  },
]

const getNoteStudent = a => a.note
const getNoteClass = schoolclasse => schoolclasse.students.map(getNoteStudent)
const note1 = school.map(getNoteClass)
console.log(note1)

Array.prototype.flatMap = function(callback){
  return Array.prototype.concat.apply([], this.map(callback))
}

const note2 = school.flatMap(getNoteClass)
console.log(note2)