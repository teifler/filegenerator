console.log('Hello World');

const fs = require('fs');
// import fs from 'fs'

//process object taskmanager for javascript

const functionName = process.argv[2]; // 3 Parameter is der functionName
console.log(functionName); // Gebe funktionsnamen aus

console.log(`function ${functionName}());{

}`);
//WO soll die Datei gespeichert werden und womit
fs.writeFileSync('./math.js', '1+2=3');
