//test for Triangle class
const Triangle = require("../lib/triangle");
const Shape = require("../lib/shape");

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
      const result = `<polygon point="150, 18 244, 182 56, 182" fill="${color}" />`;
      expect(triangle.render()).toBe(result);
    });
  });
});
