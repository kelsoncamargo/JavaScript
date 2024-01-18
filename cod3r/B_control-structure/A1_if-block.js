function justGoodNews(note) {
  if(note > 7) {
    console.log('Approved with ', note)
  }
}

justGoodNews(8.1)
justGoodNews(6.1)

function ifTrueISpeak(value) {
  if(value){
    console.log('Is True...', value)
  }
}

ifTrueISpeak()
ifTrueISpeak(null)
ifTrueISpeak(undefined)
ifTrueISpeak(NaN)
ifTrueISpeak('')
ifTrueISpeak(0)
ifTrueISpeak(-1)
ifTrueISpeak(' ')
ifTrueISpeak('?')
ifTrueISpeak([])
ifTrueISpeak([1, 2])
ifTrueISpeak({})






