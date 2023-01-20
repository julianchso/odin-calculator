const mainDisplay = document.querySelector("#mainDisplay");
const formulaDisplay = document.querySelector("#formulaDisplay");

const operators = document.querySelectorAll(".operator");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const subtract = document.querySelector("#subtract");
const add = document.querySelector("#add");

const clear = document.querySelector("#clear");
const calculate = document.querySelector("#equals");

const digits = document.querySelectorAll(".digit");

let valueStorage = "";
let firstNum = 0;
let secondNum = 0;



operators.forEach((operator) => {
  operator.addEventListener("click", calculate);
});

clear.addEventListener("click", clearAll);
calculate.addEventListener("click", equals);

function displayValue() {
  firstNum += this.value;
  mainDisplay.textContent = firstNum;
  console.log(firstNum);
}

// Click first number and display it on main display.
digits.forEach((digit) => {
  digit.addEventListener("click", displayValue);
});

// If an operator is clicked, display first number from main display on formula display along with operator sign.

// Click second number. First number disappears from main display and second number appears.

// If equals is clicked, add second number to formula display.

// Display answer in the main display.

// function calculate() {
//   formulaDisplay.textContent = firstNum;
//   firstNum = "";
//   mainDisplay.textContent = firstNum;
// }

function equals() {
  mainDisplay.textContent = operations();
}

function clearAll() {
  firstNum = 0;
  secondNum = 0;
  formulaDisplay.textContent = "";
  mainDisplay.textContent = firstNum;
}

function operations() {
  console.log("operations");
  if (multiply) {
    return firstNum * secondNum;
  } else if (divide) {
    return firstNum / secondNum;
  } else if (add) {
    return firstNum + secondNum;
  } else if (subtract) {
    return firstNum - secondNum;
  }
}
