const schedule = require('node-schedule')

const task1 = schedule.scheduleJob('*/5 * * * * *', function(){
  console.log('Run task 1', new Date().getSeconds())
})

setTimeout(function(){
  task1.cancel()
  console.log('Canceled task 1!')
}, 10000)
