//Dependencies
//this should all have other js files

const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");

function createSVG(text, textColor, shape, shapeColor) {
  //create shape html
  //switch statement for shape and the different functions
  switch (shape) {
    case "circle":
      const innerHTML = new Circle(shapeColor).render();
      return innerHTML;
    case "triangle":
      innerHTML = new Circle(shapeColor).render();
      return innerHTML;
    case "square":
      innerHTML = new Circle(shapeColor).render();
      return innerHTML;
  }
  //get text and text color from user inputs

  //HTML template
  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${innerHTML}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
      ${text}
    </text>
  </svg>`;
}

module.exports = { createSVG };
