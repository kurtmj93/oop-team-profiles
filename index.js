// Include packages needed for this application

const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const generateCSS = require('./src/generateCSS');
const fs = require('fs'); // allows writing to file system

// Array of inquirer questions for user input

const questions = [];

// Function to initialize app
function init() {
    //inquirer package makes this function simple & elegant
    inquirer
        .prompt(questions)
        .then((answers) => {

        });
};

// initialize app
init();