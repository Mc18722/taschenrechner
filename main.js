const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

let firstOp = "";
let secondOp = "";
let operator = "";

const showDisplay = () => {
  if (!firstOp && !secondOp) {
    display.innerHTML = "0";
  } else if (secondOp) {
    display.innerHTML = secondOp;
  } else {
    display.innerHTML = firstOp;
  }
};

const buttonHandler = (event) => {
  const txt = event.target.textContent;
  console.log(txt);

  if (checkInput(txt)) {
    if (!operator) {
      if (txt === "." && firstOp.includes(".")) {
        return;
      }
      firstOp = firstOp + txt;
    } else {
      if (txt === "." && secondOp.includes(".")) {
        return;
      }
      secondOp = secondOp + txt;
    }
  } else {
    if ("+-/X".includes(txt)) {
      calculate();
      operator = txt;
    }
    if (txt === "AC") {
      firstOp = "";
      secondOp = "";
      operator = "";
    }
    if (txt === "=") {
      calculate();
      operator = "";
    }
    if (txt === "+/-") {
      if (!operator) {
        if (firstOp.startsWith("-")) {
          firstOp = firstOp.substring(1);
        } else {
          firstOp = "-" + firstOp;
        }
      } else {
        if (secondOp.startsWith("-")) {
          secondOp = secondOp.substring(1);
        } else {
          secondOp = "-" + secondOp;
        }
      }
    }
  }
  showDisplay();
};

const calculate = () => {
  if (firstOp && secondOp && operator) {
    const firstValue = parseFloat(firstOp);
    const secondValue = parseFloat(secondOp);
    if (operator === "+") {
      firstOp = (firstValue + secondValue).toString();
    }
    if (operator === "-") {
      firstOp = (firstValue - secondValue).toString();
    }
    if (operator === "X") {
      firstOp = (firstValue * secondValue).toString();
    }
    if (operator === "/") {
      if (secondValue === 0) {
        firstOp = "fehler";
      } else {
        firstOp = (firstValue / secondValue).toString();
      }
    }
    operator = "";
    secondOp = "";
  }
};

for (const button of buttons) {
  button.addEventListener("click", buttonHandler);
}

const checkInput = (input) => !isNaN(input) || input === ".";
