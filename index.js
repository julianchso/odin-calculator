// TODO: get rid of leading zeros
// TODO: entering a number after equals sign will clear current operation
// TODO: if operatorSign is clicked after equal sign, perform operation (ie. secondNum becomes firstNum)

const mainDisplay = document.querySelector("#mainDisplay");
const secondaryDisplay = document.querySelector("#secondaryDisplay");
const operatorsBtn = document.querySelectorAll(".operator");
const backspaceBtn = document.querySelector("#backspace");
const clearBtn = document.querySelector("#clear");
const calculateBtn = document.querySelector("#calculate");
const digitsBtn = document.querySelectorAll(".digit");
const decimal = document.querySelector("#decimal");
const percentage = document.querySelector("#percentage");
const postiveNegative = document.querySelector("#postiveNegative");

let firstNum = 0;
let secondNum = "";
let operatorSign = "";
let result = "";
let firstNumToggle = true;

clearBtn.addEventListener("click", clearAll);
calculateBtn.addEventListener("click", calculate);
backspaceBtn.addEventListener("click", backspaceFn);
decimal.addEventListener("click", appendDecimal);
percentage.addEventListener("click", applyPercentage);
postiveNegative.addEventListener("click", flipPositiveNegative);

// Click first number and display it on main display.
digitsBtn.forEach((digit) => {
  digit.addEventListener("click", displayValue);
});

operatorsBtn.forEach((operator) => {
  operator.addEventListener("click", operation);
});

// Store value in firstNum. If the operator sign is clicked, store value in secondNum.
function displayValue(e) {
  if (!operatorSign) {
    firstNum += e.target.value;
    mainDisplay.textContent = firstNum;
  } else if (operatorSign) {
    secondNum += e.target.value;
    mainDisplay.textContent = secondNum;
  }
}

// Store operator sign and display on secondary display
function operation(e) {
  operatorSign = e.target.textContent;
  removeLastDecimal();
  mainDisplay.textContent = `${firstNum}`;
  secondaryDisplay.textContent = `${firstNum} ${operatorSign}`;
  firstNumToggle = false;
}

// adds decimal to function. If decimal already exists, do nothing (return)
function appendDecimal() {
  if (!operatorSign) {
    if (firstNum.includes(".")) return;
    firstNum += ".";
    mainDisplay.textContent = `${firstNum}`;
  } else if (operatorSign) {
    if (secondNum.includes(".")) return;
    secondNum += ".";
    mainDisplay.textContent = `${secondNum}`;
  }
}

function applyPercentage() {
  if (!operatorSign) {
    firstNum = firstNum / 100;
    mainDisplay.textContent = `${firstNum}`;
  } else if (operatorSign) {
    secondNum = secondNum / 100;
    mainDisplay.textContent = `${secondNum}`;
  }
}

function flipPositiveNegative() {
  if (!operatorSign) {
    firstNum = firstNum * -1;
    mainDisplay.textContent = `${firstNum}`;
  } else if (operatorSign) {
    secondNum = secondNum * -1;
    mainDisplay.textContent = `${secondNum}`;
  }
}

function calculate() {
  removeLastDecimal();
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
}

function operate(a, b) {
  a = Number(firstNum);
  b = Number(secondNum);
  if (operatorSign == "x") {
    return Math.round(a * b * 100) / 100;
  } else if (operatorSign == "÷") {
    if (b == 0) return "no no no";
    return Math.round((a / b) * 100) / 100;
  } else if (operatorSign == "+") {
    return a + b;
  } else if (operatorSign == "–") {
    return a - b;
  }
}

function removeLastDecimal() {
  if (firstNum[firstNum.length - 1] == ".") firstNum = firstNum.slice(0, -1);
  if (secondNum[secondNum.length - 1] == ".")
    secondNum = secondNum.slice(0, -1);
}
