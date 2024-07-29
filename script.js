function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function operate(a, b, c) {
  switch (b) {
    case "+":
      return add(a, c);
    case "-":
      return substract(a, c);
    case "÷":
      return divide(a, c);
    case "x":
      return multiply(a, c);
  }
}

let firstValue = "";
let operatorValue = "";
let secondValue = "";
let num = [...document.getElementsByClassName("number")];
num.forEach(function (item) {
  item.addEventListener("click", function () {
    if (operatorValue === "") {
      firstValue += item.innerHTML;
      displayResult(firstValue);
    } else if (firstValue !== "" && operatorValue !== "") {
      secondValue += item.innerHTML;
      displayResult(secondValue);
    }
  });
});

let operator = [...document.getElementsByClassName("operator")];
operator.forEach(function (item) {
  item.addEventListener("click", function () {
    operatorValue += item.innerHTML;
    displayResult(operatorValue);
  });
});

function equals() {
  firstValue = Number(firstValue);
  secondValue = Number(secondValue);
  result = operate(firstValue, operatorValue, secondValue);
  displayResult(result);
  firstValue = result;
  operatorValue = "";
  secondValue = "";
}

function displayResult(a) {
  let resultDisplay = document.getElementById("result");
  resultDisplay.innerHTML = a;
}
function inputNumber(event) {
  event = event.target.innerHTML;
  storeValue += event;
  displayResult(storeValue);
}

function clearInput() {
  firstValue = "0";
  secondValue = "";
  operatorValue = "";
  displayResult(firstValue);
  firstValue = "";
}
