const result = (note = 0) => note >= 7? 'Approved' : 'Disapproved'

console.log(result(7.1))
console.log(result(6.7))
console.log(result())