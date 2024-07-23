const fs = require("node:fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
console.log("Initializing questions...");
console.log("Questions loaded! Press CTRL^C at any time to cancel!")

// Array of questions for the prompt generator to run through.
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
    default: "N/A"
  },

  {
    type: "input",
    name: "usage",
    message: "How do you use your application?",
  },

  {
    type: "confirm",
    name: "creditConfirm",
    message:
      "Did you work with anyone or otherwise use net assets needing citation? (Y/N)",
  },
  //  If creditConfirm response is a confirm, displays the 'Credits' question, otherwise moves on.
  { when: answers => answers.creditConfirm,
    type: "input",
    name: "credits",
    message: "Please list your credits:",
    default: "N/A"
  },

  {
    type: "list",
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

// Creates a README file using data from answers.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    } 
    console.log("Created README.md!");
  })
}

// Initializes the app based on information from prompt answers
async function init() {
  try {
    const promptResponse = await inquirer.prompt(questions);
    if (promptResponse.credits === null || "No") {
      promptResponse.credits = "N/A"
    };
    let markdown = generateMarkdown(promptResponse);

    console.log(markdown);

    writeToFile("./README.md", markdown)
    console.log("README successfully generated!")
  }
catch (error) {
  console.error(error);
}


};
  

// Function call to initialize app
init();
