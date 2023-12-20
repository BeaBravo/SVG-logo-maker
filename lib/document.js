//Dependencies
//all classes created for the different shapes
const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");

function createSVG(text, textColor, shape, shapeColor) {
  //function createSVG will have all 4 parameters from the prompts described in user-input.js. These will be used to build the string literal for the content of the our .svg file

  //create shape html from function createShapeHTML
  const shapeHTML = createShapeHTML(shape, shapeColor);

  //get text and text color from user inputs
  //file template that will be returned by createSVG function
  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${shapeHTML}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
      ${text}
    </text>
  </svg>`;
}

function createShapeHTML(shape, shapeColor) {
  //createShapeHTML will return the string literal of the shape section depending on the shape of the user and the color
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
