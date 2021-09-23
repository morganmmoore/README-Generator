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
        message: 'Description?',
        name: 'description'
      },
      {
        type: 'list',
        message: 'What is the license?',
        name: 'license',
        choices: ['GPL_3.0', 'BSD_3', 'none']
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