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
        message: 'What is a description of you project?',
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