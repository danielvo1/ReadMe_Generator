// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function makeMarkdown(data) {
  return `# ${data.title}

![badge](https://img.shields.io/badge/license-${data.license}-green)

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
${data.description}
<br><br>

## Installation
${data.installation}
<br><br>

## Usage
${data.usage}
<br><br>

## Credits
${data.contributing}
<br><br>

## Tests
${data.tests}
<br><br>

## License 
This application is protected by the ${data.license} license. 
<br><br>

## Questions
Reach out to me through any of these following avenues :
- [Github](https://github.com/${data.github}) 
- [Email](${data.email})
<br><br>
`;
}

module.exports = {
  makeMarkdown
};
