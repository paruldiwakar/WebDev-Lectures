// Pass By Reference & Pass By Value

//Pass By Value
var a = 5; //Primitive types are passed by value
var b = a; //We simply copied the value and places it in the new memory location
++b;
console.log(a);
console.log(b);

//Pass By Reference
let object1 = { name : "Yao", password : "123" };
let object2 = object1;

object2.password = "easy";

console.log(object1);
console.log(object2);

// To create a new memory location for the same object 

//Shallow Cloning
let obj = {
	a : 'a',
	b : 'b', 
	c : {
		deep: " this is deep bruh"
	}};
let clone = Object.assign({}, obj);
let clone2 = {...obj}; // New Feature

//Deep Cloning --> use JSON
let superClone = JSON.parse(JSON.stringify(obj)); 
obj.c.deep = "nah brah not that deep";

console.log(obj); 
console.log(clone); //Shallow Cloning
console.log(clone2);//Shallow Cloning
console.log(superClone); //Deep Cloning

// ***********************************************************

// TYPE COERSION
//different datatype == different datatype
console.log(1 == '1'); // --> true




































