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
        name: "Title"
    }, 
    // {
    //     type: "input",
    //     message: "What is the project description?",
    //     name: "Description"
    // },
    // {
    //     type: "input",
    //     message: "What is the installation instructions?",
    //     name: "Installation"
    // },
    // {
    //     type: "input",
    //     message: "What is the contribution guidelines?",
    //     name: "Contributing"
    // },
    // {
    //     type: "input",
    //     message: "What is the test instructions?",
    //     name: "Tests"
    // },
    // {
    //     type: "input",
    //     message: "What is your Github username?",
    //     name: "github"
    // },
    // {
    //     type: "input",
    //     message: "What is the your email?",
    //     name: "email"
    // },
    // {
    //     type: "list",
    //     name: "license",
    //     message: "Chose the appropriate license for this project: ",
    //     choices: [
    //         "GPL",
    //         "MIT",
    //         "BSD",   
    //     ]
    //     }
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
        writeToFile("ReadMe.md", results);
    })
}

// Function call to initialize app
init();
