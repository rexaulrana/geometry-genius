// functional way
// get  input value
function inputValueById(inputId) {
  const inputValue = document.getElementById(inputId).value;
  const value = parseFloat(inputValue);
  return value;
}

// set input value to element value
function setElementValue(elementId, newValue) {
  const elementValue = document.getElementById(elementId);

  elementValue.innerText = newValue;
}

// GET ELEMENT VALUE
function getElementValueById(elementId) {
  const elementValue = document.getElementById(elementId).innerText;
  const value = parseFloat(elementValue);
  return value;
}
