# Readme Generator

![badge](https://img.shields.io/badge/license-MIT-green)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
<br><br>


## Description
I was tasked to create a Readme generator using node and the inquirer.
<br><br>

## Installation
I was given starter codefor this assignment. I first created a new repository in my github and copied over the files from gitlab. Additionally, I had to download inquirer in order to be able to use that function within my code.  
<br><br>

## Technologies 
- Node.js
- NPM(Inquirer)

## Process
I first created a list of questions thats were necessary for the readme contents. I did so by using the inquirer function to create a promise. With this function, I was able to record user input data and store it to be used later. Then I created my generateReadme function within another file. And using require and export I was able to export the function into the main index.js file, where I was then able to access the function. The function return a string of a whole readme file, with string literals that were passed in as the user's input. After using writeFile, I created a readMe file and return the string onto the page. 
<br><br>

## Author
 Daniel Vo 
<br><br>

## License
Copyright (c) 2016 Simon Boudrias (twitter: @vaxilart) Licensed under the MIT license.
<br><br>

## Link to Demo 
- [Demo](https://watch.screencastify.com/v/npg2olioQJGspX9jNIkP)
<br><br>

## Questions
Reach out to me through any of these following avenues :
- [Github](https://github.com/danielvo1) 
- [Email](daniel.vo@berkeley.edu)
<br><br>
