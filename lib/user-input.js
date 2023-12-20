//Dependencies
const inquirer = require("inquirer");
const validateColor = require("validate-color").default;


//user input is a class to make it interactive and specific as per the requirements
class LogoInput {
  constructor() {}
  getAcronym() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Enter your three character acronym: ",
          name: "acronym",
        },
      ])
      .then(({ acronym }) => {
        if (acronym.length > 3) {
          console.log("acronym must be max 3 characters");
          return this.getAcronym();
        } else {
          return acronym.toUpperCase();
        }
      });
  }
  getTextColor() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Text color, enter colour keyword or hexadecimal code: ",
          name: "textColor",
        },
      ])
      .then(({ textColor }) => {
        const validColor = validateColor(textColor);
        //check if its color, it is return the input and continue, if not run this prompt again
        if (validColor) {
          return textColor;
        } else {
          console.log("don't forget to add the #");
          return this.getTextColor();
        }
      });
  }
  getShape() {
    return inquirer
      .prompt([
        {
          type: "list",
          message: "Choose your logo shape: ",
          name: "shape",
          choices: ["triangle", "circle", "square"],
        },
      ])
      .then(({ shape }) => shape);
  }

  getshapeColor() {
    return inquirer
      .prompt([
        {
          type: "input",
          message:
            "Shape fill color, enter colour keyword or hexadecimal code: ",
          name: "shapeColor",
        },
      ])
      .then(({ shapeColor }) => {
        const validColor = validateColor(shapeColor);
        if (validColor) {
          return shapeColor;
        } else {
          console.log("don't forget to add the # before");
          return this.getshapeColor();
        }
      });
  }
}

module.exports = LogoInput;
