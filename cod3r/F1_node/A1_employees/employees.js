const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(RES => {
  const employees = RES.data
 console.log(
    employees
      .filter(employee => employee.pais === 'China')
      .filter(employee => employee.genero === 'F')
      .reduce((lower_salary, salary)=>{
        if(salary.salario < lower_salary.salario){
          lower_salary = salary
        }
        return lower_salary
      })
  )
}) 