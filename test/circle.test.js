//test for Triangle class
const Circle = require("../lib/circle");

describe("Triangle class", () => {
  describe("Initialization", () => {
    it("should be an instance of class Circle", () => {
      const triangle = new Circle();
      expect(triangle).toBeInstanceOf(Circle);
    });
  });
  describe("render() method", () => {
    it("should return the HTML as a string with the color in the fill style option", () => {
      const color = "blue";
      const triangle = new Circle(color);
      const result = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
      expect(triangle.render()).toBe(result);
    });
  });
});
