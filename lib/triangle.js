//this class will extend from the Shape class
const Shape = require("./shape");

class Triangle extends Shape {
  constructor(shapeColor) {
    super();
    this.shapeColor = shapeColor;
  }

  render() {
    return `<polygon point="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle;
