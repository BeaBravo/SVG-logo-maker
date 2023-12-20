//Dependencies
//this should all have other js files

function createSVG(text, textColor, shape, shapeColor) {
  //create shape html
  //switch statement for shape and the different functions
  switch (shape) {
    case "circle":
      return (shapeHTML = new Circle(shapeColor));
    case "triangle":
      return (shapeHTML = new Triangle(shapeColor));
    case "square":
      return (shapeHTML = new Square(shapeColor));
  }
  //get text and text color

  //HTML template
  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${shapeHTML}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
      ${text}
    </text>
  </svg>`;
}

module.exports = { createSVG };
