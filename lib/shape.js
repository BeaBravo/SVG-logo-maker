//parent class for all three shapes
class Shape {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
  render() {
    throw new Error("render() method should be called for when the shape is defined.")
  }
}

module.exports = Shape;
