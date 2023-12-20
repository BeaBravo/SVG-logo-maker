//test for Square class
const Square = require("../lib/square");

describe("Circle class", () => {
  describe("Initialization", () => {
    it("should be an instance of class Square", () => {
      const square = new Square();
      expect(square).toBeInstanceOf(Square);
    });
  });
  describe("render() method", () => {
    it("should return the HTML as a string with the color in the fill style option", () => {
      const color = "blue";
      const square = new Square(color);
      const result = `<rect width="200" height="200" x="50" y="0" style="fill:${color}" />`;
      expect(square.render()).toBe(result);
    });
  });
});
