// TODO: Include packages needed for this application
const inquirer = require("inquirer"); 
const fs = require("fs"); 
const questions = require("./questions.js");

// TODO: Create an array of questions for user input
inquirer
    .prompt(questions)
    .then((replies) => {
        switch(replies.license) {
            case "MIT" :
                replies.license = licenseText.mit; 
                badge = badgeIcon.mit
                break; 
            case "Apache" :
                replies.license = licenseText.apache; 
                badge = badgeIcon.apache
                break;
            case "GPL" :
                replies.license = licenseText.gpl; 
                badge = badgeIcon.gpl
                break; 
            case "ISC" :
                replies.license = licenseText.isc;
                badge = badgeIcon.isc
                break; 
        }
        const file = "readMe.md";

        fs.writeFile(file, generateHTML(replies), (err) => 
        err ? console.log(err) : console.log("success!!!!whoohoo!!!")
        );
    }); 

// TODO: Create a function to write README file
const generateHTML = (replies) =>
`# Table of Contents:
* [Title](#Title)
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [License](#License)
* [Github](#Github)
* [Email](#Email)
# Title:
# ${replies.title}
${badge}
# Owned By:
${replies.name}
## Description:
${replies.description}
# Installation
${replies.installation}
#Usage
${replies.usage}
#Contribution Guidelines
${replies.contribution}
#Tests
Some of the tests that I ran for this project are: ${replies.tests}.
#License
${replies.license}
#Github
Please visit my ${replies.username} to visit my work.
#Email
My Email is ${replies.email}. Feel free to reach me here.`;



function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
