//Dependencies
const LogoInput = require("./lib/user-input"); //construct class LogoInput for the prompts
const { createSVG } = require("./lib/document"); //createSVG function from document.js
const fs = require("fs"); //fs from node to writeFile

//Data
const logoInput = new LogoInput();

//Helper function
async function getLogo() {
  //getLogo is an asynchronous function that will call the prompts and waiting for the response before moving onto the next. These will be saved in 4 different variables
  const acron = await logoInput.getAcronym();
  const textColor = await logoInput.getTextColor();
  const shape = await logoInput.getShape();
  const shapeColor = await logoInput.getshapeColor();

  //these 4 variable will be the input parameters of the createSVG function to get the template of the svg file
  const innerHTML = createSVG(acron, textColor, shape, shapeColor);

  //a new file will be created using fs.writeFileSync and saved in a folder in the repo
  fs.writeFileSync(`./examples/${acron}.svg`, innerHTML);

  //console.log a message to let the user know their logo has been generated
  console.log(`Generated ${acron}.svg -> check it out in the examples folder`);
}

//initialization
getLogo();
