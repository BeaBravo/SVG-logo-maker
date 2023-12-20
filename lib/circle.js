//circle class will create a circle section that will be used for createDocument section

class Circle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

module.exports = Circle;
