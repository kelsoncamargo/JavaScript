const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

approved.forEach((userName, index) => {
  console.log(`${index + 1} ${userName} `)
})

approved.forEach(userName => console.log(userName))

const showApproved = approved => console.log(approved)
approved.forEach(showApproved)