const Shapes = require("./lib/shape.js");
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
     });