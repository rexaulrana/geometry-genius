function areaCalculate() {
  // base
  const triangleBaseText = document.getElementById("triangle-base").value;
  const triangleBase = parseFloat(triangleBaseText);

  //   height
  const triangleHeightText = document.getElementById("triangle-height").value;
  const triangleHight = parseFloat(triangleHeightText);
  const total = 0.5 * triangleBase * triangleHight;
  const triangleArea = (document.getElementById("triangle-area").innerText =
    total);
  console.log(triangleBase, triangleHight);
}

// rectangle area
function rectangleAreaCalculate() {
  // width
  const rectangleWidthText = document.getElementById("rectangle-width").value;
  const rectangleWidth = parseFloat(rectangleWidthText);

  //   length
  const rectangleLengthText = document.getElementById("rectangle-length").value;
  const rectangleLength = parseFloat(rectangleLengthText);
  const total = rectangleLength * rectangleWidth;

  //   area
  const rectangleArea = (document.getElementById("rectangle-area").innerText =
    total);
}
