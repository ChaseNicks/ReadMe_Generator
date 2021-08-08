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
        type: "list",
        message: "Using the up/down arrow keys, select an appropriate license badge by clicking enter:",
        choices: ["Apache-2.0", "MIT", "BSD-3-Clause", "gpl-3.0"],
        name: "license",
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
        message: 'Github Repository Name?',
        name: 'gitrepo'
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
`# ${data.readmeName}

# Table of Contents

  [Description](https://github.com/${data.gitusername}/${data.gitrepo}#Description)\n\n
  [License](https://github.com/${data.gitusername}/${data.gitrepo}#License)\n\n
  [Installation Intructions](https://github.com/${data.gitusername}/${data.gitrepo}#Installation-Instructions) \n\n
  [Contributers](https://github.com/${data.gitusername}/${data.gitrepo}#Contributers)\n\n
  [Test Instructions](https://github.com/${data.gitusername}/${data.gitrepo}#Test-Instructions)\n\n
  [Questions](https://github.com/${data.gitusername}/${data.gitrepo}#Questions)

# Description

  ${data.description}

# License

  This repository is released under the license of: [${data.license}](https://opensource.org/licenses/${data.license})

# Installation Instructions

  ${data.installation}

# Contributers

  ${data.contribution}

# Test Instructions

  ${data.test}

# Questions

Github: [${data.gitusername}](https://github.com/${data.gitusername})\n\nEmail: ${data.email}`
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