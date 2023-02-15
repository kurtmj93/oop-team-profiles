// Include packages needed for this application
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const generateCSS = require('./src/generateCSS');
const fs = require('fs'); // allows writing to file system
const path = require('path'); // allows writing to dist folder

// Include classes from lib 
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// functions for use in validating responses in inquirer question array

const validate = require('./src/validators');


// Array of inquirer questions for user input

const questions = [
    {
        type: 'input',
        name: 'managername',
        message: `Begin by entering the full name of the team's manager:`
    },
    {
        type: 'input',
        name: 'manageremail',
        message: `What is the manager's email address?`,
        validate: function (input) {
            return validate.Email(input);
        }
    },
    {
        type: 'input',
        name: 'managerid',
        message: `Enter the manager's employee ID #:`,
        validate: function (input) {
            return validate.Id(input);
        }
    }
];

function writeFileToDist(fileName, data) {
    fs.writeFile(path.join(process.cwd(), 'dist', fileName), data, (err) =>{
        if (err) {
            console.log(err);
        } // simple err callback
    });
}

// Function to initialize app
function init() {
    //inquirer package makes this function simple & elegant
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeFileToDist('style.css', generateCSS(answers));
            writeFileToDist('index.html', generateHTML(answers));
        });
};

// initialize app
init();