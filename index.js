//Dependencies
const LogoInput = require("./lib/user-input");
const { createSVG } = require("./lib/document");
const fs = require("fs");

const logoInput = new LogoInput();

async function getData() {
  const acron = await logoInput.getAcronym();
  const textColor = await logoInput.getTextColor();
  const shape = await logoInput.getShape();
  const shapeColor = await logoInput.getshapeColor();
  const innerHTML = createSVG(acron, textColor, shape, shapeColor);
  fs.writeFileSync(`./examples/${acron}.svg`, innerHTML);
  console.log(`Generated ${acron}.svg -> check it out in the examples folder`);
}

getData();
