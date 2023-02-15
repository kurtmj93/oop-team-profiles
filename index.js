// Include packages needed for this application

const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const generateCSS = require('./src/generateCSS');
const fs = require('fs'); // allows writing to file system
const path = require('path'); // allows writing to dist folder


// Array of inquirer questions for user input

const questions = [];

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