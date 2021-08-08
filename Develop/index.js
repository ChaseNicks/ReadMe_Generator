// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'readmeName',
        message: 'What is the name of your project / application?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a 3-5 sentences of the project / application!'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation intructions for your project / application!'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please provide your project / application contribution guidelines!'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please provide your project / application test intructions!'
      },
      {
        type: 'input',
        name: 'gitusername',
        message: 'What is your Github username?'
      },
      {
        type: 'input',
        name: 'gitlink',
        message: 'What is your Github profile link?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address that you would like to use for any inquires regarding your project / application?'
      },
    ]);
  };

// TODO: Create a function to write README file
const generateREADME = (data) =>
`#${data.readmeName}

# Table of Contents

  * Description
  * Installation Intructions
  * Contribution Guidelines
  * Test Instructions

# Description

* ${data.description}

# Installation Instructions

* ${data.installation}

# Contribution Guidelines

* ${data.contribution}

# Test Instructions

* ${data.test}

# Questions

Github Username: ${data.gitusernames}       Email: ${data.email}`
;

// TODO: Create a function to initialize app
const init = () => {
    questions()
      .then((data) => writeFileAsync(`README.md`, generateREADME(data)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();