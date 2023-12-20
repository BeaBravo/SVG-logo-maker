//circle constructor class will create a rectangle section in the svg file
//will need a shapeColor input parameter for the fill color
class Circle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

module.exports = Circle;
