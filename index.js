//Dependencies
const LogoInput = require("./lib/user-input");

const logoInput = new LogoInput();

logoInput.getAcronym();

//user input
// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "Enter your three character acronym: ",
//       name: "acronym",
//     },
//     {
//       type: "input",
//       message: "Text color, enter colour keyword or hexadecima code: ",
//       name: "textColor",
//     },
//     {
//       type: "list",
//       message: "Choose your logo shape: ",
//       name: "shape",
//       choices: ["triangle", "circle", "square"],
//     },
//     {
//       type: "input",
//       message: "Shape fill color, enter colour keyword or hexadecimal code: ",
//       name: "shapeColor",
//     },
//   ])
//   .then(({ acronym, textColor, shape, shapeColor }) => {
//     console.log(acronym, textColor, shape, shapeColor);
//     if (acronym.length > 3) {
//       console.log("Acronym must be max 3 characters long, try again: ");
//       return;
//     }
//   });
