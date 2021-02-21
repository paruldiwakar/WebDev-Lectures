// const http = require('http');

// const server = http.createServer((request, response) =>{
// 	const user = {
// 		name : 'john',
// 		age : 13
// 	}
// 	response.setHeader('Content-Type', 'application/json');
// 	response.end(JSON.stringify(user));
// })

// server.listen(3000);

// 		***********************************
// 			TO CREATE AN EXPRESS SERVER
//      ***********************************

const express = require('express');

const app = express();


/*app.get('/profile',(req, res) => {
const user = {
	name : "paul", 
	age : 11
}
	// automatically does stringify
	res.send(user);
} )
*/

// 				*************************
//		 			   MIDDLEWARE
//      		*************************

// middleware feature is gonna pass through this use funtion first and buffer there 
/*app.use((req, res, next) =>{
	console.log("hellooo");
	next();
})


app.get('/',(req, res) => {

   res.send("testest")
	// automatically does stringify
} )*/



// If you are using Express 4.16+ you can now replace that with:

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());


// 				*************************
// 					 USING POSTMAN
//      		*************************

app.use(express.urlencoded({extended: false}));
app.use(express.json());


/*app.get('/',(req, res) => {

   res.send("getting root")
} )

app.get('/profile',(req, res) => {

   res.send("getting profile")
	// automatically does stringify
} )

app.post('/profile',(req, res) => {

 console.log(req.body)	
	res.send("success");
} )*/


// 				*************************
// 					 RESTFUL APIs
//      		*************************

app.get('/',(req, res) => {
	//console.log(req.query); //chrome -> http://localhost:3000/?name=haru&age=29, terminal -> { name: 'haru', age: '29' }
	// req.body;
	//console.log(req.header);
	// req.params();

   res.send("getting root");
} )

app.listen(3000);
















