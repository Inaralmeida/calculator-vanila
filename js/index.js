const controller = new Controller()
const numbersArr = document.querySelectorAll('.number')
const operatorsArr = document.querySelectorAll('.operator')
const reset = document.querySelector('#reset')
const del = document.querySelector('#del')

console.log(operatorsArr)

numbersArr.forEach((key) => {
  key.addEventListener('click', (e) => {
    e.preventDefault()
    const value = e.target.value
    controller.addNumber(value)
  })
})

operatorsArr.forEach((key) => {
  key.addEventListener('click', (e) => {
    e.preventDefault()
    const value = e.target.value
    console.log(value)
    controller.addOperator(value)
  })
})

reset.addEventListener('click', () => controller.reset())
del.addEventListener('click', () => controller.del())
