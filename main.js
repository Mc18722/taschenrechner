const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

let firstOp = "";
let secondOp = "";

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
  console.log(event.target.textContent);
};

for (const button of buttons) {
  button.addEventListener("click", buttonHandler);
}
