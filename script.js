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
let point = document.getElementById("point");
num.forEach(function (item) {
  item.addEventListener("click", function () {
    if (operatorValue === "") {
      firstValue += item.innerHTML;
      if (firstValue.includes(".")) {
        point.classList.add("hidden");
      }
      displayResult(firstValue);
    } else if (firstValue !== "" && operatorValue !== "") {
      if (secondValue.includes(".")) {
        point.classList.add("hidden");
      }
      secondValue += item.innerHTML;
      displayResult(secondValue);
    }
  });
});

let operator = [...document.getElementsByClassName("operator")];
operator.forEach(function (item) {
  item.addEventListener("click", function () {
    point.classList.remove("hidden");
    operatorValue += item.innerHTML;
    displayResult(operatorValue);
  });
});

function equals() {
  firstValue = Number(firstValue);
  secondValue = Number(secondValue);
  point.classList.remove("hidden");
  if (operatorValue === "÷" && secondValue === 0) {
    displayResult("fuck you");
  } else {
    result = operate(firstValue, operatorValue, secondValue);
    displayResult(result);
    firstValue = result;
    operatorValue = "";
    secondValue = "";
  }
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
  point.classList.remove("hidden");
  firstValue = "0";
  secondValue = "";
  operatorValue = "";
  displayResult(firstValue);
  firstValue = "";
}
