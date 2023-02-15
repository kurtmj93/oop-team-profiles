// Include packages needed for this application

const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const generateCSS = require('./src/generateCSS');
const fs = require('fs'); // allows writing to file system

// Array of inquirer questions for user input

const questions = [];

function writeFiles(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
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
            writeFiles('style.css', generateCSS(answers));
            writeFiles('index.html', generateHTML(answers));
        });
};

// initialize app
init();