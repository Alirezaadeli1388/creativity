let currentExpression = '';
const display = document.getElementById('display');

function appendToDisplay(value) {
  currentExpression += value;
  display.value = currentExpression;
}

function clearDisplay() {
  currentExpression = '';
  display.value = '';
}

function evaluateExpression() {
  try {
    currentExpression = eval(currentExpression);
    display.value = currentExpression;
  } catch (error) {
    display.value = 'Error';
  }
}
