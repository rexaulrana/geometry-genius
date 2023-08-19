// triangle area
function triangleAreaCalculate() {
  const base = inputValueById("triangle-base");
  const height = inputValueById("triangle-height");
  const area = 0.5 * base * height;
  const areaCalculate = area.toFixed(2);
  setElementValue("triangle-area", areaCalculate);
}

// rectangle area
function rectangleAreaCalculate() {
  const width = inputValueById("rectangle-width");
  const length = inputValueById("rectangle-length");
  const area = width * length;
  setElementValue("rectangle-area", area);
}

// parallelogram area

function parallelogramAreaCalculate() {
  const base = inputValueById("parallelogram-base");
  const height = inputValueById("parallelogram-height");
  const area = base * height;
  setElementValue("parallelogram-area", area);
  // console.log(setElementValue());
  // console.log(base, height);
}

// rhombus area
function rhombusAreaCalculate() {
  const d1 = getElementValueById("rhombus-d1");
  const d2 = getElementValueById("rhombus-d2");
  const area = 0.5 * d1 * d2;
  const setArea = setElementValue("rhombus-area", area);
}

// pentagon area

function pentagonAreaCalculate() {
  const p = getElementValueById("p");
  const b = getElementValueById("b");
  const area = 0.5 * p * b;
  const setArea = setElementValue("pentagon-area", area);
}

// ellipse area
function ellipseAreaCalculate() {
  const p = getElementValueById("p");
  const b = getElementValueById("b");
  const area = 3.1416 * p * b;
  const areaCalculate = area.toFixed(2);
  setElementValue("ellipse-area", areaCalculate);
}
