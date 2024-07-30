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

let deleteButton = document.getElementById("delBtn");
deleteButton.addEventListener("click", function () {
  if (operatorValue === "") {
    firstValue = firstValue.slice(0, -1);
    displayResult(firstValue);
  } else if (firstValue !== "" && operatorValue !== "" && secondValue === "") {
    operatorValue = "";
    displayResult(firstValue);
  } else if (operatorValue !== "" && firstValue !== "") {
    secondValue = secondValue.slice(0, -1);
    displayResult(secondValue);
  }
});

let operator = [...document.getElementsByClassName("operator")];
operator.forEach(function (item) {
  item.addEventListener("click", function () {
    point.classList.remove("hidden");
    operatorValue += item.innerHTML;
    displayResult(operatorValue);
  });
});

function operate(a, b, c) {
  switch (b) {
    case "+":
      return a + b;
    case "-":
      return a - c;
    case "÷":
      return a / c;
    case "x":
      return a * c;
  }
}

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

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  const key = event.key;

  if (isNumberKey(key)) {
    handleNumberKey(key);
  } else if (isOperatorKey(key)) {
    handleOperatorKey(key);
  } else if (key === ".") {
    handleDecimalPoint(key);
  } else if (key === "Backspace") {
    handleDelete();
  } else if (key === "Enter" || key === "=") {
    handleEqual();
  } else if (key === "Escape") {
    handleClear();
  }
}

function isNumberKey(key) {
  return !isNaN(key);
}

function isOperatorKey(key) {
  return ["+", "-", "/", "*"].includes(key);
}

function handleNumberKey(key) {
  if (operatorValue === "") {
    firstValue += key;
    displayResult(firstValue);
  } else {
    secondValue += key;
    displayResult(secondValue);
  }
}

function handleOperatorKey(key) {
  if (firstValue !== "" && secondValue === "") {
    operatorValue = key;
    displayResult(operatorValue);
  }
}

function handleDecimalPoint(key) {
  if (operatorValue === "") {
    if (!firstValue.includes(".")) {
      firstValue += ".";
      point.classList.add("hidden");
      displayResult(firstValue);
    }
  } else {
    if (!secondValue.includes(".")) {
      secondValue += ".";
      point.classList.add("hidden");
      displayResult(secondValue);
    }
  }
}

function handleDelete() {
  if (operatorValue === "") {
    firstValue = firstValue.slice(0, -1);
    displayResult(firstValue);
  } else if (firstValue !== "" && operatorValue !== "" && secondValue === "") {
    operatorValue = "";
    displayResult(firstValue);
  } else if (operatorValue !== "" && firstValue !== "") {
    secondValue = secondValue.slice(0, -1);
    displayResult(secondValue);
  }
}

function handleEqual() {
  if (firstValue !== "" && operatorValue !== "" && secondValue !== "") {
    let result = eval(`${firstValue} ${operatorValue} ${secondValue}`);
    displayResult(result);
    firstValue = result.toString();
    operatorValue = "";
    secondValue = "";
  }
}

function handleClear() {
  point.classList.remove("hidden");
  firstValue = "";
  secondValue = "";
  operatorValue = "";
  displayResult(firstValue);
}
