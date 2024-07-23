const fs = require("node:fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
console.log("Initializing questions...");
console.log("Questions loaded! Press CTRL^C at any time to cancel!")

// TODO: Create an array of questions for user input
const questions = [
  {type: "input",
    name: "title",
    message: "What's the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please describe your project. (Motivation, why it was built, what you learned, etc.)",
  },

  {
    type: "input",
    name: "installation",
    message: "What are the steps for installation?",
  },

  {
    type: "input",
    name: "usage",
    messsge: "How do you use your application?",
  },

  {
    type: "confirm",
    name: "creditConfirm",
    message:
      "Did you work with anyone or otherwise use net assets needing citation? (Y/N)",
  },
  {when: answers => {
    return answers.creditConfirm;
  }, 
    type: "input",
    name: "Credits",
    message: "Please list your credits:",
    default: "N/A"
  },


  {
    type: "List",
    name: "License",
    message: "Please pick a license:",
    choices: ["MIT License", "GNU GPLv3", "Apache License 2.0", "BSD 3-Clause", "CC0 (Creative Commons)"],
  },

  {
    type: "input",
    name: "Username",
    message: "Please enter your GitHub username. No @ is needed.",
  },

  { type: "input", 
    name: "Email", 
    message: "Please enter your email." 
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    } 
    console.log("Created README.md!");
  })
}

// TODO: Create a function to initialize app
function init() {
  try {
    const promptResponse = inquirer.prompt(questions);
    generateMarkdown(promptResponse);

    writeToFile("./README.MD", generateMarkdown)
  }
catch (error) {
  console.error();
}

};
  

// Function call to initialize app
init();
