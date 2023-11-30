const { Rectangle, Square, Circle } = require("./lib/shape.js");
const inquirer = require("inquirer");
const fs = require('fs');

const questions = [{
          name: "logoText",
          message: "Please enter the text to be used for the logo: ",
          type: "input"
     },
     {
          name: "logoTextColor",
          message: "What color would you like to use for the text? ",
          type: "input"
     },
     {
          name: "logoShape",
          message: "Please choose a logo shape from the given choice: ",
          type: "list",
          choices: ["Square",
               "Rectangle",
               "Circle"]
     },
     {
          name: "logoShapeColor",
          message: "What would be the background color for the shape ",
          type: "input"
     }];


function chooseLogoShape(logoText, logoTextColor, logoShape, logoShapeColor) {
     if (logoShape.toLowerCase() === "rectangle") {
          const createRectange = new Rectangle("150", "200", logoShapeColor, logoTextColor, logoText);
          const shapeSVG = createRectange.render();
          return shapeSVG;
     }
     else if (logoShape.toLowerCase() === "square") {
          const createSquare = new Square("150", logoShapeColor, logoTextColor, logoText);
          const shapeSVG = createSquare.render();
          return shapeSVG;
     }
     else {
          const createCircle = new Circle("75", logoShapeColor, logoTextColor, logoText);
          const shapeSVG = createCircle.render();
          return shapeSVG;
     }
}

inquirer
     .prompt(questions)
     .then((answers) => {
          console.log(answers.logoText);
          const newLogo = chooseLogoShape(answers.logoText, answers.logoTextColor, answers.logoShape, answers.logoShapeColor);

          console.log("Print the value==" + newLogo);

          fs.writeFile("logo.svg", newLogo, (err) =>
               err ? console.error(err) : console.log('Success!')
          );
          console.log("Print the value=222=" + newLogo);
     });