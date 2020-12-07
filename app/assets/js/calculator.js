"use:strict";
/****************************************
 *            declarations
 * 
 *****************************************/
let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
//console.log(buffer);

const screen = document.querySelector('.screen');

/****************************************
 *              EVENT
 *****************************************/
document
  .querySelector('.calc-buttons')
  .addEventListener('click', function (event) {
    buttonClick(event.target.innerText);
  })

/****************************************
 *              CALLS
 *****************************************/




/****************************************
 *              FUNCTIONS
 *****************************************/
function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    //console.log("Symbol", value)
    handleSymbol(value)
  } else {
    //console.log("Number", value)
    handleNumber(value)
  }

  rerender();
}


function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      previousOperator = null
      break;
    case "=":
      if (previousOperator === null) {
        return; // get out
      }
      addsOperations(parseInt(buffer));
      previousOperator = null;
      buffer = String(runningTotal);
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    default:
      handleMath(value);
      break;
  }
}

function handleMath(value) {

}


function rerender() {
  screen.innerText = buffer;
}


