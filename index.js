// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        message: 'What is the title?',
        name: 'title'
      },
      {
        type: 'input',
        message: 'Please provide a brief description.',
        name: 'description'
      },
      {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation'
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage'
      },
      {
        type: 'input',
        message: 'List your collaborators, if any, with GitHub profile links.',
        name: 'contributors'
      },
      {
        type: 'input',
        message: 'If you wrote tests, provide examples on how to run them.',
        name: 'tests'
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
      },
      {
        type: 'input',
        message: 'How can others contact you with questions?',
        name: 'questions'
      },
      {
        type: 'list',
        message: 'What is the license?',
        name: 'license',
        choices: ['GPL-3.0', 'BSD-3-Clause', 'Apache-2.0', 'MPL-2.0', 'none']
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Complete'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((data) => {
        console.log(data);
        const markdown = generateMarkdown(data);
        console.log(markdown);
        writeToFile('README.md', markdown);
      })
}

// Function call to initialize app
init();