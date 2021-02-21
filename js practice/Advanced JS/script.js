//CLOSURE

const first = () =>{
	const greet = "hello";
	const second = () => {
		console.log(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

//CURRYING
const curriedmult = (a) => (b) => a * b;

curriedmult(2)(8);

//COMPOSE
const compose = (f,  g) => (a) => f(g(a));

const sum = (num) => num + 1;
compose(sum, sum)(5); 

// let + const
const player = "bobby";
let experience = 100;
let wizardLevel = false;

if(experience > 90){
	let wizardLevel = true;
	console.log("inner", wizardLevel);
}

console.log("outer", wizardLevel);

//Template strings
const name = "sallu";
const name = "sallu"10;
const pet = "cat";

const greeting = "hello " + name + ". You are just " + age + " years old.";
const betterGreeting = `hello ${name}. You are just ${age}, what a cute ${pet} `;


//Default Arguments
function greet(name = "", age = 30, pet = "horse"){
	return`hello ${name}. You are just ${age}, what a cute ${pet} `;
}

// Advanced Arrays

const array = [1, 2, 3, 4];
const double = [];
const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log("forEach", double);

//map -> works as we will always have to return something

const mapArray = array.map((num) => {
	return num * 2;
})

console.log("map", mapArray);


// filter -> apply a condition to an array

const filterArray = array.filter(num => num %2 === 0);
console.log("filter", filterArray);

// reduce
const reduceArray = array.reduce((accumulator, num) =>{
	return accumulator + num;
}, 0);

console.log("reduce", reduceArray);

// splice -> to insert and replace elements
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);


// Advanced Objects

// Reference Type
var obj1 = {val : 10};
var obj2 = obj1;
var obj3 = {val : 10};


//Context vs Scope
function b(){
	let a = 4; // a is in scope of the funtion
}

const obj = {
	a : function(){
		console.log(this);
	}
}

// Instantiation -> when you make a copy of an object
class Player {
	constructor(name, type) {
		console.log(this);
		this.name = name;
		this.type = type;
	}
	introduce () {
		console.log(`hi i am ${this.name}, i am a ${this.type}`);
	}
}

class Wizard extends Player {
	 constructor (name, type) {
	 	// anytime weextend a clas swe need to call the constructor funtion
	 	// of that class too. Call super with the propertiees you want to call.
	 	super(name, type)
	 }
	 play(){
	 	console.log(`weeeee I'm a ${this.type}`);
	 }
}

const wizard1 = new Wizard("shelly", "healer");
const wizard2 = new Wizard("elle", "fire");






























