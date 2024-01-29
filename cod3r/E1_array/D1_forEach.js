Array.prototype.forEach2 = function(callback){
  for(let i = 0; i < this.length; i++){
    callback(this[i], i, this)
  }
}

const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

approved.forEach2((userName, index) => {
  console.log(`${index + 1} ${userName} `)
})
