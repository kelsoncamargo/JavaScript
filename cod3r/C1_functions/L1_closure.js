const x = 'Glocal'

function outside(){
  const x = 'Local'
  function inside(){
    return x
  }
  return inside
}

const myFunction = outside()
console.log(myFunction())