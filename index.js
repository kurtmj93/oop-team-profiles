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
            return validate.Num(input);
        }
    },
    {
        type: 'input',
        name: 'officenumber',
        message: `Enter the manager's office #:`,
        validate: function (input) {
            return validate.Num(input);
        }
    },
    {
        type: 'list',
        name: 'choices',
        message: 'What would you like to do next?',
        choices: [
            'Add an Engineer',
            'Add an Intern',
            'Finish & Generate Team Profiles'
        ]
    },
    { 
        type: 'input',
        name: 'engineername',
        message: 'Enter the full name of the Engineer:',
        when(answers) {
            return answers.choices === 'Add an Engineer';
        }
    },
    { 
        type: 'input',
        name: 'engineeremail',
        message: `What is the engineer's email address?`,
        validate: function (input) {
            return validate.Email(input);
        },
        when(answers) {
            return answers.choices === 'Add an Engineer';
        },
    },
    { 
        type: 'input',
        name: 'engineerid',
        message: `What is the engineer's employee id #?`,
        validate: function (input) {
            return validate.Num(input);
        },
        when(answers) {
            return answers.choices === 'Add an Engineer';
        },
    },
    { 
        type: 'input',
        name: 'username',
        message: `What is the engineer's github username?`,
        validate: function (input) {
            return validate.Username(input);
        },
        when(answers) {
            return answers.choices === 'Add an Engineer';
        },
    },
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