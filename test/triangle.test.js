//test for Triangle class
const Triangle = require("../lib/triangle");

describe("Triangle class", () => {
  describe("Initialization", () => {
    it("should be an instance of class Triangle", () => {
      const triangle = new Triangle();
      expect(triangle).toBeInstanceOf(Triangle);
    });
  });
  describe("render() method", () => {
    it("should return the HTML as a string with the color in the fill style option", () => {
      const color = "blue";
      const triangle = new Triangle(color);
      const result = `<polygon points="150,15 300,150 0,150" fill="${color}" />`;
      expect(triangle.render()).toBe(result);
    });
  });
});
