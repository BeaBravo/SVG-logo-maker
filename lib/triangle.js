//triangle constructor class will create a rectangle section in the svg file
//will need a shapeColor input parameter for the fill color
class Triangle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return `<polygon points="150,15 300,150 0,150" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle;
