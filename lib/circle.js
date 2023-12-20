//this class will extend from the Shape class
const Shape = require("./shape");

class Circle extends Shape {
  constructor(shapeColor) {
    super();
    this.shapeColor = shapeColor;
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

module.exports = Circle;
