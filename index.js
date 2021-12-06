// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // inquirer module for user command line prompts
const fs = require('fs'); // fs for writing data to files
const generateMarkdown = require('./utils/generateMarkdown'); // local set of functions for generating markdown

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Please enter a title for this project (or leave blank to omit this section):',
    },
    {
        name: 'description',
        message: 'Please provide a description for this project (or leave blank to omit this section):',
    },
    {
        name: 'installation',
        message: 'Please provide any installation instructions you would like included(or leave blank to omit this section):',
    },
    {
        name: 'usage',
        message: 'Please provide any usage instructions you would like included (or leave blank to omit this section):',
    },
    {
        name: 'contributing',
        message: 'Please provide any contribution guidelines you would like included (or leave blank to omit this section):',
    },
    {
        name: 'tests',
        message: 'Please provide any test instructions you would like included (or leave blank to omit this section):',
    },
    {
        type: 'list',
        choices: ['MIT', 'BSD 3-Clause', 'GNU GPLv3'],
        name: 'license',
        message: 'Please select the appropriate license type to use for this project:',
    },
    {
        name: 'user',
        message: 'Please enter your github username:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, generateMarkdown(data), (err) =>
        // Ternary operator takes in a condition followed by a question mark (?)
        // then an expression to execute if the condition is truthy followed by a colon (:)
        // and finally the expression to execute if the condition is falsy.
        // This operator is frequently used as a shortcut for the if statement.
        err ? console.error(err) : console.log('README file created successfully!')
    )
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            const readmeData = generateMarkdown(answers);
            fs.writeToFile('./output/README.md', readmeData);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
