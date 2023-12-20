//Dependencies
//this should all have other js files

const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");

function createSVG(text, textColor, shape, shapeColor) {
  //create shape html
  const shapeHTML = createShapeHTML(shape, shapeColor);
  //get text and text color from user inputs

  //HTML template
  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${shapeHTML}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
      ${text}
    </text>
  </svg>`;
}

function createShapeHTML(shape, shapeColor) {
  //switch statement for shape and the different functions
  let innerHTML = "";
  switch (shape) {
    case "circle":
      innerHTML = new Circle(shapeColor).render();
      return innerHTML;
    case "triangle":
      innerHTML = new Triangle(shapeColor).render();
      return innerHTML;
    case "square":
      innerHTML = new Square(shapeColor).render();
      return innerHTML;
  }
}

module.exports = { createSVG };
