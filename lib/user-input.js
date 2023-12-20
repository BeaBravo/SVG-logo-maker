//Dependencies
const inquirer = require("inquirer");
const validateColor = require("validate-color").default;

//user input is a class to make it interactive and specific as per the requirements
class LogoInput {
  //LogoInput constructor has 4 different methods for the user inputs, getAcronym, getTextColor, getShape, and getShapeColor. This will be called in the index.js to grab those inputs and create a logo
  constructor() {}
  getAcronym() {
    //getAcronym() method prompts the user for a three character acronym, then this input is checked for length
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
          //this if statement is used to check the length of the user input. If longer than 3, it will console.log "acronym must be max 3 characters" and will run the method again, prompting the user again
          //else (if the length is 3 or shorter) it will return the acronym in all caps
          console.log("acronym must be max 3 characters");
          return this.getAcronym();
        } else {
          return acronym.toUpperCase();
        }
      });
  }
  getTextColor() {
    //getTextColor method prompts the user to input a color. This input is then checked for validity
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
        //if statement to check if it is a valid color, if yes return the input, if not console.log a message to the user and run this prompt again
        if (validColor) {
          return textColor;
        } else {
          console.log("don't forget to add the #");
          return this.getTextColor();
        }
      });
  }
  getShape() {
    //getShape() method will prompt the user with three choices for the shape of the logo: triangle, circle, or square. This input is then returned
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
    //getShapeColor method prompts the user to input a color. This input is then checked for validity
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
          //if statement to check if it is a valid color, if true return the input, if not console.log a message to the user and run this prompt again
          return shapeColor;
        } else {
          console.log("don't forget to add the # before");
          return this.getshapeColor();
        }
      });
  }
}

module.exports = LogoInput;
