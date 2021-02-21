//Evaluate these:
//#1
[2] === [2] 
{} === {} 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;


//#3 create two classes: an Animal class and a Mammal class. 
// create a cow that accepts a name, type and color and
// has a sound method that moo's her name, type and color. 

class animal{
	constructor(name, type, color){
		this.name = name;
		this.type = type;
		this.color = color;
	}
} 

//constructor = (name, type, color) => super(name, type, color);

class mammal extends animal{
	constructor (name, type, color) {
		super(name, type, color);
	} 
   sound(){
   	const moot = `I am a mo-${this.type}-oo. My name is mo-${this.name}-oo and my color is  mo-${this.color}-oo`;
   	console.log(moot);
   }
}

const cow = new mammal("Cowabunga", "Cow", "black and white");
cow.sound();
