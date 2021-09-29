// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } else {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  } else {
    return `(https://opensource.org/licenses/${license})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return 'None';
  } else {
    return `${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Description

${data.description}

## Table of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[Contributions](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributions

${data.contributors}

## License

${renderLicenseSection(data.license)}

## Tests

${data.tests}

## Questions

* ${data.github} https://github.com/${data.github}
* ${data.email}
* ${data.questions}
`;
}

module.exports = generateMarkdown;
