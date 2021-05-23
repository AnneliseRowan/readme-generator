// TODO: Include packages needed for this application
const inquirer = require("inquirer"); 
const fs = require("fs"); 

// TODO: Create an array of questions for user input
inquirer
    .prompt([
   {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Where is a description of you project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: `What is your project's usage information?`,
  },
  {
    type: 'input',
    name: 'contribution',
    message: "What are the contribution guidelines?",
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like?',
    choices: ["BSD", "MIT", "GPL"],
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
])
.then((replies) => {
    switch(replies.license) {
        case "MIT": 
            r
    }
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
