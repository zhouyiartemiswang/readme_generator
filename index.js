const fs = require("fs");
const inquirer = require("inquirer");
const fileContent = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your project's name?",
    "Please write a short description of your project.",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?"
];

// array of names 
const nameArray = ["username", "email", "title", "description", "license", "dependencyCommand", "testCommand", "usage", "contribution"];

// array of license choices for license question
const licenseChoices = ["MIT", "Apache 2.0", "BSD 3-Clause", "ISC"];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, fileContent(data), function (err) {
        if (err) {
            console.log("Error");
        }
    });

}

// function to initialize program
function init() {
    
    // generate objects for inquirer prompt
    let promptObj = [];

    for (let i = 0; i < nameArray.length; i++) {
        promptObj[i] = {
            type: "input",
            message: questions[i],
            name: nameArray[i]
        }
        if (i === 4) {
            promptObj[i].type = "list";
            promptObj[i].choices = licenseChoices;
        }
    }

    inquirer
        .prompt(promptObj)
        .then(function (data) {
            console.log("Generating README...");
            writeToFile("README.md", data);
        });
        
}

// function call to initialize program
init();
