// function text(message){
// 	console.log(message);
// }

// text("yoooo");

// // Annonymous function
// var bye = function(){
// 	console.log("byeee");
// }

// bye();

// function multiply(a, b){
// 	return a * b;
// }
//console.log(multiply(2, 4));

//  ************************************************

// function checkDriverAge(age){
// 		if (Number(age) < 18) {
// 		  alert("Sorry, you are too young to drive this car. Powering off");
// 	     }  	
// 	     else if (Number(age) > 18) {
// 		  alert("Powering On. Enjoy the ride!");
// 	     } 	
// 	     else if (Number(age) === 18) {
// 		  alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	     }
// }
// var age = console.log(92);
// checkDriverAge(age);

//  ************************************************

// ************* ARRAYS *************
//var list = [12, 34, 23, 65];

//  ************************************************

// ************* Object *************

// var user1 = {
// 	fname : "john",
//	lname : "watson",
// 	age : 46,
// 	hobby : "Soccer",
// 	isMarried : false,
// 	shout : function (){
// 		console.log("AHHHHHH!");
// 	}
// } ;

//  ************************************************
//Ex. 7

// var user = {
// 	username : "john",
// 	password : "1234567890",
// };

// var database = [ 
//     {
//  	username : "john",
//  	password : "1234567890",
//     } 
// ];

// var newsfeed = [
//     {
// 		username: "Bobby",
// 		timeline: "So tired from all that learning!"
// 	},
// 	{
// 		username: "Sally",
// 		timeline: "Javascript is sooooo cool!"
// 	},
// 	{
// 		username: "Mitch",
// 		timeline: "Javascript is preeetyy cool!"
// 	}
// ];


//  ************************************************

// var database = [
//  		{
//  			username : "paul",
//  			password : "d",
//  		}
// ];

// var newsfeed = [
//      {
// 		username: "Bobby",
//  		timeline: "So tired from all that learning!"
//  	},
//  	{
//  	 		username: "Sally",
//  		timeline: "Javascript is sooooo cool!"
// 	},
// ]

// var userNamePrompt = prompt("Whats your username?");
// var passwordPrompt = prompt("Whats your password?");

// function signIn(username, password) {
// 	if (username === database[0].username && 
// 		password === database[0].password){
// 		console.log(newsfeed);
// 	}
// 	else{
// 		alert("incorrect username or password");
// 	}
// }

// signIn(userNamePrompt, passwordPrompt);


//  ************************************************

// ************* forEach Loop *************

var fruits = [
		"apple",
		"banana",
		"cherries",
		"kiwi",
		"orange"];
fruits.forEach(function(fruit, i){
	console.log(fruit, i);
})		













