import { changeTheme } from "./changeTheme.js";
import { Controller } from "./controllers.js";
const controller = new Controller();
const numbersArr = document.querySelectorAll(".number");
const operatorsArr = document.querySelectorAll(".operator");
const reset = document.querySelector("#reset");
const del = document.querySelector("#del");
const slider = document.querySelector("#myRange");

slider.addEventListener("change", (e) => {
  e.preventDefault();
  const value = e.target.value;
  changeTheme(value);
});

numbersArr.forEach((key) => {
  key.addEventListener("click", (e) => {
    e.preventDefault();
    const value = e.target.value;
    controller.addNumber(value);
  });
});

operatorsArr.forEach((key) => {
  key.addEventListener("click", (e) => {
    e.preventDefault();
    const value = e.target.value;
    controller.addOperator(value);
  });
});

reset.addEventListener("click", () => controller.reset());
del.addEventListener("click", () => controller.del());
