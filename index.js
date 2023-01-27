const mainDisplay = document.querySelector("#mainDisplay");
const secondaryDisplay = document.querySelector("#secondaryDisplay");
const operatorsBtn = document.querySelectorAll(".operator");
const backspaceBtn = document.querySelector("#backspace");
const clearBtn = document.querySelector("#clear");
const calculateBtn = document.querySelector("#calculate");
const digitsBtn = document.querySelectorAll(".digit");

let firstNum = "";
let secondNum = "";
let operatorSign = "";
let result = "";
let firstNumToggle = true;

clearBtn.addEventListener("click", clearAll);
calculateBtn.addEventListener("click", calculate);
backspaceBtn.addEventListener("click", backspaceFn);

// Click first number and display it on main display.
digitsBtn.forEach((digit) => {
  digit.addEventListener("click", displayValue);
});

operatorsBtn.forEach((operator) => {
  operator.addEventListener("click", operation);
});

// Store value in firstNum. If the operator sign is clicked, store value in secondNum.
function displayValue(e) {
  // while (firstNum.includes(".") {

  // })
  if (!operatorSign) {
    firstNum += e.target.value;
    // if (firstNum.includes(".")) return;
    mainDisplay.textContent = firstNum;
  } else if (operatorSign) {
    // if (secondNum.includes(".")) return;
    secondNum += e.target.value;
    mainDisplay.textContent = secondNum;
  }
}

// function appendDecimal(e) {
//   if (firstNum)
// }

// Store operator sign and display on secondary display
function operation(e) {
  operatorSign = e.target.textContent;
  removeLastDecimal()
  mainDisplay.textContent = `${firstNum}`;
  secondaryDisplay.textContent = `${firstNum} ${operatorSign}`;
  firstNumToggle = false;
}

function calculate() {
  console.log(`firstNum: ${firstNum}`);
  console.log(`secondNum: ${secondNum}`);
  removeLastDecimal()
  secondaryDisplay.textContent = `${firstNum} ${operatorSign} ${secondNum}`;
  result = operate();
  console.log(result);
  mainDisplay.textContent = result;
}

function clearAll() {
  firstNum = "";
  secondNum = "";
  secondaryDisplay.textContent = "";
  mainDisplay.textContent = 0;
  operatorSign = "";
  firstNumToggle = true;
}

function backspaceFn() {
  backspace.addEventListener("click", backspaceValue);
}

function backspaceValue() {
  if (!operatorSign) {
    firstNum = firstNum.slice(0, -1);
    mainDisplay.textContent = firstNum;
  } else if (operatorSign) {
    secondNum = secondNum.slice(0, -1);
    mainDisplay.textContent = secondNum;
  }
  // console.log(`backspaceFirstValue: ${firstNum}`);
  // console.log(firstNum);
}

// function backspaceSecondValue() {

// }

function operate() {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  if (operatorSign == "x") {
    return firstNum * secondNum;
  } else if (operatorSign == "÷") {
    if (secondNum == 0) return "no no no";
    return firstNum / secondNum;
  } else if (operatorSign == "+") {
    return firstNum + secondNum;
  } else if (operatorSign == "-") {
    return firstNum - secondNum;
  }
}

function removeLastDecimal() {
  if (firstNum[firstNum.length - 1] == ".") firstNum = firstNum.slice(0, -1);
  if (secondNum[secondNum.length - 1] == ".") secondNum = secondNum.slice(0, -1);
}