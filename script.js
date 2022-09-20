let count = 0;
let outputNumber = document.getElementById("number");

function numberPlus() {
  outputNumber.innerHTML = ++count;
}
function numberMinus() {
  outputNumber.innerHTML = --count;
}
