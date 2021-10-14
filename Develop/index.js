// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkdown = require("/Users/danielvo/Desktop/ReadMe_Generator/Develop/utils/generateMarkdown")
// const generate = require('utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project name?",
        name: "title"
    }, 
    {
        type: "input",
        message: "What is the project description?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project? ",
        name: "installation"
    },
    {
        type: "input",
        message: "Explain and provide examples for use",
        name: "usage"
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What is the test instructions?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is the your email?",
        name: "email"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "GNU",
            "MIT",
            "ISC",   
        ]
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName , generateMarkdown.makeMarkdown(data), err => err ? console.log(err):console.log("success"));
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(results => {
        console.log(results);
        writeToFile("readMe.md", results);
    })
}

// Function call to initialize app
init();
