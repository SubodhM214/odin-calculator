let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function () {
  let clear = document.querySelector(".clear");
  let equal = document.querySelector(".equal");
  let decimal = document.querySelector(".decimal");
  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");

  let previousScreen = document.querySelector(".previous");
  let currentScreen = document.querySelector(".current");

  numbers.forEach((number) =>
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      currentScreen.textContent = currentValue;
    })
  );

  operators.forEach((op) =>
    op.addEventListener("click", function (e) {
      handleOperator(e.target.textContent);
      console.log(operator);
      previousScreen.textContent = previousValue + " " + operator;
      currentScreen.textContent = currentValue;
    })
  );

  clear.addEventListener("click", function (e) {
    previousValue = "";
    currentValue = "";
    operator = "";
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
  });

  equal.addEventListener("click", function () {
    calculate();
    previousScreen.textContent = "";
    if (previousValue.length <= 5) {
      currentScreen.textContent = previousValue;
    } else {
      currentScreen.textContent = previousValue.slice(0, 5) + "...";
    }
  });
});

function handleNumber(num) {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
}

function handleOperator(op) {
  console.log(op);
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function calculate() {
  previousValue = Number(previousValue);

  currentValue = Number(currentValue);
  console.log(previousValue, currentValue, operator);
  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "*") {
    previousValue *= currentValue;
  } else {
    previousValue /= currentValue;
  }
  console.log(previousValue);
  previousValue = roundNumber(previousValue).toString();
  currentValue = previousValue;
}

function roundNumber(numb) {
  return Math.round(numb * 100) / 100;
}
