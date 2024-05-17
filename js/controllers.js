import { Model } from "./models.js";
import { ViewKeyboard } from "./views.js";
const model = new Model();
export class Controller {
  addNumber(number) {
    this.seeAccount(model.addNumber(number));
  }

  addOperator(operator) {
    this.seeAccount(model.addOperator(operator));
  }

  reset() {
    model.reset();
    this.seeAccount("");
  }
  del() {
    model.del();
    this.seeAccount(model.display);
  }

  seeAccount(text) {
    const view = new ViewKeyboard();
    view.viewDisplay(text);
  }
}
