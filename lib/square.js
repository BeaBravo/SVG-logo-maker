//Square constructor class will create a rectangle section in the svg file
//will need a shapeColor input parameter for the fill color
class Square {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return `<rect width="200" height="200" x="50" y="0" style="fill:${this.shapeColor}" />`;
  }
}

module.exports = Square;
