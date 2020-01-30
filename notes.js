const chalk = require('chalk');
const fs = require('fs');

const getNotes = () => {
    return 'Your Notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes();
    // const dublicateNotes = notes.filter(note => note.title === title);
    const dublicateNote = notes.find(note => note.title === title); //Faster

    // if(dublicateNotes.length === 0) {
    //     notes.push({
    //         title, body
    //     });
    //     saveNotes(notes);
    //     console.log(chalk.green.inverse('Note added'))
    // } else {
    //     console.log(chalk.red.inverse('Note title taken!'));
    // }   
    if(!dublicateNote) {
        notes.push({
            title, body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('Note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }   
}

const removeNote = (title) => {

    const notes = loadNotes();
    const notesToKeep = notes.filter( note => note.title !== title);

    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));

    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title)

    if(note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch(e) {
        return [];
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}