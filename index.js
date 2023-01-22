const mainDisplay = document.querySelector("#mainDisplay");
const formulaDisplay = document.querySelector("#formulaDisplay");

const operators = document.querySelectorAll(".operator");
// const multiply = document.querySelector("#multiply");
// const divide = document.querySelector("#divide");
// const subtract = document.querySelector("#subtract");
// const add = document.querySelector("#add");

const backspace = document.querySelector("#backspace");
const clear = document.querySelector("#clear");
const calculate = document.querySelector("#equals");

const digits = document.querySelectorAll(".digit");

let firstNum = "";
let secondNum = "";
let operatorSign = "";

let firstNumToggle = true;

clear.addEventListener("click", clearAll);
calculate.addEventListener("click", equals);
backspace.addEventListener("click", backspaceFn);

// Click first number and display it on main display.
digits.forEach((digit) => {
  digit.addEventListener("click", displayFirstValue);
  // } else if (!firstNumToggle) {
});

function displayFirstValue(e) {
  if (operatorSign == "") {
    firstNum += e.target.value;
    mainDisplay.textContent = firstNum;
    console.log(`displayFirstValue: ${firstNum}`);
  } else if (operatorSign) {
    secondNum += e.target.value;
    mainDisplay.textContent = secondNum;
    console.log(`displaySecondValue: ${secondNum}`);
  }
}

operators.forEach((operator) => {
  operator.addEventListener("click", operation);
});

function operation(e) {
  operatorSign = e.target.textContent;
  formulaDisplay.textContent = `${firstNum} ${operatorSign}`;
  firstNumToggle = false;
}

// Click second number. First number disappears from main display and second number appears.

// If equals is clicked, add second number to formula display.

// Display answer in the main display.

function equals() {
  console.log(`firstNum: ${firstNum}`);
  console.log(`secondNum: ${secondNum}`);
  formulaDisplay.textContent = `${firstNum} ${operatorSign} ${secondNum}`;
}

function clearAll() {
  firstNum = "";
  secondNum = "";
  formulaDisplay.textContent = "";
  mainDisplay.textContent = 0;
  operatorSign = "";
  firstNumToggle = true;
}

function backspaceFn() {
  if (operatorSign == "") {
    backspace.addEventListener("click", backspaceFirstValue);
    console.log(`backspaceFn: ${firstNum}`);
  } else {
    backspace.addEventListener("click", backspaceSecondValue);
    console.log(`secondNum: ${secondNum}`);
  }
}

function backspaceFirstValue() {
  firstNum = firstNum.slice(0, firstNum.length - 1);
  console.log(`backspaceFirstValue: ${firstNum}`);
  console.log(firstNum);
  mainDisplay.textContent = firstNum;
}

function backspaceSecondValue() {
  secondNum = secondNum.slice(0, secondNum.length - 1);
  console.log(secondNum);
  mainDisplay.textContent = secondNum;
}

function operate() {
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
