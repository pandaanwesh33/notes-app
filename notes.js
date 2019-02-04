const fs = require('fs');

//this function fetches all notes...
var fetchNotes = () =>{
	try{
		notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}
	catch(e){
		return [];
	}
}

//this function saves the note passed into it...
var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

//this function adds the note...
var addNote = (title,body) => {
	var notes = fetchNotes() ;
	var note = {
		title,
		body
	};
	

	//duplicateNotes contain all the notes string in the notes array
	//filter function loops through each element of the duplicateNotes array and returns true if title matches and false if not matches
	var duplicateNotes = notes.filter((note) => note.title === title );

	if(duplicateNotes.length === 0){
		notes.push(note);  //push method adds the passed argument to the end of the array
		saveNotes(notes);
		return note;
	}

};

//this function reads all note present in the file
var getAll = () =>{
	return fetchNotes();
};

//this function removes the note having the same same title as that of the argument...
var removeNote = (title) =>{
	var notes = fetchNotes();
	var duplicateNotes = notes.filter((note) => note.title !== title );
	saveNotes(duplicateNotes);

	return notes.length !== duplicateNotes.length;

};

//this function diplays the title and the body of the note that matches with the title passed as argument...
var readNote = (title) =>{
	var notes = fetchNotes();
	var duplicateNotes = notes.filter((note) => note.title === title );
	return duplicateNotes[0];

};

function logNote(note){
	console.log("---");
	console.log("Title :" + note.title);
	console.log("Body :" + note.body);
}

module.exports = {
	addNote,
	getAll,
	removeNote,
	readNote,
	logNote
};