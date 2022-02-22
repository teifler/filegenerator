const writeFile = require('./writeFile');
// import fs from 'fs'
//process object taskmanager for javascript
//console.log(process.argv);
/*
  '/usr/local/Cellar/node/17.3.1/bin/node',
  '/Users/tim/Development/hh-web-22-1/filegenerator/index.js',
  'functionName'

*/

/*
const functionName = process.argv[2]; // const kriegt den 3 Parameter zugewiesen

console.log(functionName);

*/

//WO soll die Datei gespeichert werden und womit --
//Math datei und 1+2=3 soll geschrieben werden

//Create file with parameter which you enter and create it with empty function

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'functionName',
      message: 'What is the name of your function?',
    },
    {
      name: 'faveColor',
      message: 'What is your favorite color?',
      default: '#008f68',
    },
  ])
  .then(answers => {
    writeFile(answers.functionName);
  });
