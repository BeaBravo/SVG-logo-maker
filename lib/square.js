//Square class will create a rectangle section in the html
class Square {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return `<rect width="200" height="200" x="50" y="0" style="fill:${this.shapeColor}" />`;
  }
}

module.exports = Square;
