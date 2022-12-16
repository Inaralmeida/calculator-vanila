class Model {
  constructor() {
    this.total = 0
    this.numbers = []
    this.operator = ''
    this.display = ''
    this.allCharacters = []
  }

  addNumber(number) {
    this.numbers.push(number)
    this.allCharacters.push(number)
    this.display += number
    return this.display
  }

  addOperator(operator) {
    if (operator !== '=') {
      this.allCharacters.push(operator)
    }
    if (this.operator === '') {
      this.operator = operator
      this.total = parseFloat(this.numbers.join(''))
      this.numbers = []
      this.display += ' ' + operator + ' '
      return this.display
    } else {
      this._account(operator, this._selectOperator(this.operator))
      return this.display
    }
  }

  _account(operator, result) {
    console.log(result)
    this.total = parseFloat(result)
    if (operator === '=') {
      this.operator = ''
      this.display = result
      this.numbers = [result]
    } else {
      this.operator = operator
      this.display = result + ' ' + operator + ' '
      this.numbers = []
    }
  }

  _selectOperator(operator) {
    let result
    const n1 = parseFloat(this.numbers.join(''))
    const total = parseFloat(this.total)
    console.log(' this.total', this.total)
    switch (operator) {
      case '+':
        result = n1 + total
        break
      case '-':
        result = total - n1
        break
      case '/':
        result = total / n1
        break
      case '*':
        result = total * n1
        break
    }
    console.log(result)
    return result
  }

  reset() {
    this.total = 0
    this.numbers = []
    this.operator = ''
    this.display = ''
  }

  del() {
    console.log(this.display)
  }
}
