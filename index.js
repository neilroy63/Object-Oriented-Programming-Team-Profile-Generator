const inquirer = require("inquirer");
// to save files
const fs = require("fs");

const Employee = require("./lib/Employee");

const Manager = require("./lib/Manager");

// what happens when you start inquirer, gets data, uses it to put it into the classess, source folder will contain helper files where things get generated, will be a way to save it in the dist folder....