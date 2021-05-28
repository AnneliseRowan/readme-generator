module.exports = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'owner',
        message: 'What is your first and last name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Why did you build this project? Or What problem does this application solve?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: `Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
                ```md
                ![alt text](assets/images/screenshot.png)
                ````,
      },
      {
        type: 'input',
        name: 'contribution',
        message: "Please list your collaborators and their Github username?",
      },
      {
        type: 'input',
        name: 'test',
        message: 'Did you do any automated testing?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license would you like?',
        choices: ["Apache", "MIT", "GPL", "ISC"],
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
];
