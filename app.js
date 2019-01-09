//console.log("starting notes-app");
const fs = require('fs');
const os =require('os');

//const myModule = require('./myModule.js');

// console.log(myModule.addNote());

var user=os.userInfo();
var command = process.argv[2];
console.log(process.argv);

if(command === 'add'){
	console.log('add command executed');
}
else if(command === 'remove'){
	console.log('remove command executed');
}
else if(command === 'list'){
	console.log('list command executed');
}
else if(command === 'read'){
	console.log('read command executed');
}
else{
	console.log('invalid command');
}

// fs.appendFile('message.txt','Hello this is my first node.js script',function(err){
// 	if(err){
// 		console.log("unable to write file");
// 	}

// });