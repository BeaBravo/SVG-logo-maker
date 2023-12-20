//Dependencies
const LogoInput = require("./lib/user-input");
const { createSVG } = require("./lib/document");
const fs = require("fs");
const { join } = require("path");

const logoInput = new LogoInput();

// logoInput.getAcronym();

async function getData() {
  const acron = await logoInput.getAcronym();
  const textColor = await logoInput.getTextColor();
  const shape = await logoInput.getShape();
  const shapeColor = await logoInput.getshapeColor();
  console.log(
    `your acronym is ${acron} in text color ${textColor} shape: ${shape} filled in ${shapeColor}`
  );
  const innerHTML = await createSVG(acron, textColor, shape, shapeColor);
  console.log(innerHTML);
}

getData();
