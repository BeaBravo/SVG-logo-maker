//test for class Shape
const Shape = require("../lib/shape");

describe("Shape class", () => {
  describe("initialize", () => {
    it("should create an instance of the Shape class", () => {
      const shape = new Shape();
      expect(shape).toBeInstanceOf(Shape);
    });
  });
  describe("render() method", () => {
    it("should throw an error when called from this class", () => {
      const shape = new Shape();
      const callback = () => shape.render();
      const error = new Error(
        "render() method should be called for when the shape is defined."
      );
      expect(callback).toThrow(error);
    });
  });
});
