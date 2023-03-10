// Include packages needed for this application
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const fs = require('fs'); // allows writing to file system
const path = require('path'); // allows writing to dist folder

// Include classes from lib 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// functions for use in validating responses in inquirer question array

const validate = require('./src/regexValidators');


// Array to store employees

const employeeArray = [];

// Array of questions to pass to inquirer prompt when creating a new Manager

const managerQuestions = [
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
]

// function to prompt and create new manager, push to employeeArray

function managerPrompt() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            var manager = new Manager(answers.managername, answers.managerid, answers.manageremail, answers.officenumber);
            employeeArray.push(manager);
            addEmployee();
        });
} 

// Array of questions to pass to inquirer prompt when creating a new Engineer

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineername',
        message: `Begin by entering the full name of the engineer:`
    },
    {
        type: 'input',
        name: 'engineeremail',
        message: `What is the engineer's email address?`,
        validate: function (input) {
            return validate.Email(input);
        }
    },
    {
        type: 'input',
        name: 'engineerid',
        message: `Enter the engineer's employee ID #:`,
        validate: function (input) {
            return validate.Num(input);
        }
    },
    {
        type: 'input',
        name: 'username',
        message: `What is the engineer's GitHub username?`,
        validate: function (input) {
            return validate.Username(input);
        }
    },
]

// function to prompt and create new engineer, push to employeeArray

function engineerPrompt() {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            var engineer = new Engineer(answers.engineername, answers.engineerid, answers.engineeremail, answers.username);
            employeeArray.push(engineer);
            addEmployee();
        });
};

// Array of questions to pass to inquirer prompt when creating a new Engineer

const internQuestions = [
    {
        type: 'input',
        name: 'internname',
        message: `Begin by entering the full name of the intern:`
    },
    {
        type: 'input',
        name: 'internemail',
        message: `What is the intern's email address?`,
        validate: function (input) {
            return validate.Email(input);
        }
    },
    {
        type: 'input',
        name: 'internid',
        message: `Enter the intern's employee ID #:`,
        validate: function (input) {
            return validate.Num(input);
        }
    },
    {
        type: 'input',
        name: 'school',
        message: `What is the intern's school?`,
    },
]

// function to prompt and create new intern, push to employeeArray

function internPrompt() {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            var intern = new Intern (answers.internname, answers.internid, answers.internemail, answers.school);
            employeeArray.push(intern);
            addEmployee();
        });
};

// function serving as a menu of choices for what to do next - add employee typs or finish & generate HTML

function addEmployee() {
    inquirer.prompt(
        [
            {
                type: 'list',
                name: 'choices',
                message: 'What would you like to do next?',
                choices: [
                    'Add an Engineer',
                    'Add an Intern',
                    'Finish & Generate Team Profiles'
                ]
            }
        ]
    )
    .then((answers) => {
        if (answers.choices === 'Add an Engineer') {
            engineerPrompt();
        } else if (answers.choices === 'Add an Intern') {
            internPrompt();
        } else {
            writeFileToDist('index.html', generateHTML(employeeArray));
        }
    })
};

// writeFile function

function writeFileToDist(fileName, data) {
    fs.writeFile(path.join(process.cwd(), 'dist', fileName), data, (err) =>{
        if (err) {
            console.log(err);
        } // simple err callback
    });
}

// Unnamed function defined to initialize app
(function(){
    console.log('Initializing & reticulating splines...');
    managerPrompt();
})(); // immediately calls after being defined