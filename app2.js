// const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

//Customize yargs version
yargs.version('1.1.0')

var getNotes = require('./utils.js');

const msg = getNotes();
console.log(msg);

// console.log(validator.isEmail('smrhrbi@gmail.com'));
// console.log(validator.isURL('smrhrb'));



const greenMsg = chalk.bold.inverse.greenBright('Success!');
console.log(greenMsg);

console.log(process.argv[2]);
console.log(yargs.argv);

const command = process.argv[2];
if(command === 'add') {
    console.log('add requested')
}


