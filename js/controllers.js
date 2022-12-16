const model = new Model()
class Controller {
  addNumber(number) {
    this.seeAccount(model.addNumber(number))
  }

  addOperator(operator) {
    this.seeAccount(model.addOperator(operator))
  }

  reset() {
    model.reset()
    this.seeAccount('')
  }
  del() {
    model.del()
    // this.seeAccount('')
  }

  seeAccount(text) {
    const view = new ViewKeyboard()
    view.viewDisplay(text)
  }
}
