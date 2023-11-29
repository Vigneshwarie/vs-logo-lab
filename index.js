const Rectangle = require("./lib/shape.js");
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


inquirer
     .prompt(questions)
     .then((answers) => {
          console.log(answers.logoText);
          const createRectange = new Rectangle("200", "200", "blue", "white");
          const vs = createRectange.render();

          console.log("Print the value==" + vs);

          fs.writeFile("logo.svg", vs, (err) =>
               err ? console.error(err) : console.log('Success!')
          );

          console.log("Print the value=222=" + vs);
     });