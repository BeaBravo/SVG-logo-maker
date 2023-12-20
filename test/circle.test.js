//test for Circle class
const Circle = require("../lib/circle");

describe("Circle class", () => {
  describe("Initialization", () => {
    it("should be an instance of class Circle", () => {
      const triangle = new Circle();
      expect(triangle).toBeInstanceOf(Circle);
    });
  });
  describe("render() method", () => {
    it("should return the HTML as a string with the color in the fill style option", () => {
      const color = "blue";
      const circle = new Circle(color);
      const result = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
      expect(circle.render()).toBe(result);
    });
  });
});
