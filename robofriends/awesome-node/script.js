const fs = require('fs')

fs.readFile('./hello.txt', (err, data) => {
	if(err){
		console.log('erroorrrrr')
	}
	console.log('async function', data.toString());
})

const file = fs.readFileSync('./hello.txt');
console.log('sync function', file.toString());

/*	OUTPUT : sync function hellllooooo there !!!!!
 			 async function hellllooooo there !!!!! */

/*fs.appendFile('./hello.txt', ' .This is the appended sentence.', err =>{
	if(err){
		console.log(err);
	}
});

OUTPUT : hellllooooo there !!!!! .This is the appended sentence. */

fs.writeFile('bye.txt', 'This is a written file :D', err =>{
	if(err){
		console.log(err);
	}
})

fs.unlink('./bye.txt', err =>{
	if(err){
		console.log(err);
	}
	console.log('inception');
})































