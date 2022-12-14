// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "welcome",
    message:
      "Thenks for using my ReadMe.md generator! You will be presented with options for you REadMe's sections and their respective contents. Hit enter to begin!",
  },
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Pleae enter your project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: " Write a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter usage of the projects:",
  },
  {
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project",
    choices: [
      "Apache 2.0",
      "BSD 3-Clause",
      "GNU GPLv3.0",
      "MIT",
      "Mozilla Public 2.0",
      "No license",
    ],
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter you project contribution guidelines:",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide instructions on how to test the app.",
  },
  {
    type: "input",
    name: "username",
    message: "Please enter you GitHub username;",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter you GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email; ",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data);
}

// TODO: Create a function to initialize app
// function init() {
//   inquirer.prompt(questions).then((responses) => {
//     console.log("SUCCESS");
//     writeToFile("README.md", generateMarkdown({ ...responses }));
//   });
// }

function init() {
  inquirer.prompt(questions).then(function (data) {
    fs.writeFileSync("README.md", generateMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
