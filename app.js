//docs
//run e.g node app.js --title="some title" --body="some body"

const fs = require('fs');
const os =require('os');

const yargs=require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if(command === 'add'){
	var note=notes.addNote(argv.title,argv.body);
	if(note){
		console.log("note created");
		logNote(note);
	}
	else{
		console.log("note with same title exists");
	}
}
else if(command === 'remove'){
	var removeNote = notes.removeNote(argv.title);
	if(removeNote){
		console.log("note removed");
	}
	else{
		console.log("note not found");
	}
}
else if(command === 'list'){
	var allNotes = notes.getAll();
	console.log("Displaying all notes...");
	allNotes.forEach((note) => notes.logNote(note));
}
else if(command === 'read'){
	var note=notes.readNote(argv.title);
	if(note){
		console.log("note");
		logNote(note);
	}
	else{
		console.log("note not found");
	}
}
else{
	console.log('invalid command');
}



// fs.appendFile('message.txt','Hello this is my first node.js script',function(err){
// 	if(err){
// 		console.log("unable to write file");
// 	}

// });