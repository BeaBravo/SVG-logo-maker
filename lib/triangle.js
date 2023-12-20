//triangle class will create a polygon section in the html
class Triangle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return `<polygon points="150,15 300,150 0,150" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle;
