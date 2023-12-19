//Dependencies
const inquirer = require("inquirer");

//user input
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
          this.getTextColor();
        }
      });
  }
  getTextColor() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Text color, enter colour keyword or hexadecima code: ",
          name: "textColor",
        },
      ])
      .then(({ textColor }) => {
        //check if its color with a newly written function
      });
  }
}

module.exports = LogoInput;
