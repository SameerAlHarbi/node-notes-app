const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Remove a note.');
    }
});

//Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log('List all notes');
    }
});

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read an note',
    handler: function() {
        console.log('Read an note');
    }
})

//add remove read list
console.log(yargs.argv);