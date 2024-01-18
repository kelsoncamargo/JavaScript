Number.prototype.between = function(start, end) {
  return this >= start && this <= end
}

const printReuslt = function(note) {
  if(note.between(9, 10)){
    console.log('Horor board')
  } else if(note.between(7, 8.99)){
    console.log('Approved')
  } else if(note.between(4, 6.99)){
    console.log('Recovery')
  } else if(note.between(0, 3.99)){
    console.log('Disapproved')
  } else{
    console.log('Invalid note')
  }
}

printReuslt(10)
printReuslt(8.9)
printReuslt(6.55)
printReuslt(2.33)
printReuslt(-1)
printReuslt(11)


