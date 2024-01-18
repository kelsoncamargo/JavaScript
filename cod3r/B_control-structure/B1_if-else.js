const pintResult = function(note){
  if(note >= 7){
    console.log('Approved')
  }else{
    console.log('Disapproved')
  }
}

pintResult(10)
pintResult(4)
pintResult('Epa') // Careful

