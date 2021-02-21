//							 ***********
// 			 				 *   ES7   *
// 			 				 ***********


const pet = ["dog", "cat", "lion"]
pet.includes("dog"); // --> true
pet.includes("bird"); // --> false

// 			 				 ***********
// 			 				 *   ES8   *
// 			 				 ***********


	String Padding
//  **************
"hello".padStart(10);
OUTPUT : "     hello"
"hello".padEnd(10);
OUTPUT : "hello     "

// 		***************

const fun = (a, b, c, d ,) => {
	console.log(a);
}
fun(1,2,4,5,);
OUTPUT : 1

// 		***************

	 Object.values
	 Object.entries
	 Object.keys
//   **************
let obj = {
	username1 : "santa",
	username2 : "rudolph",
	username3 : "grinch"
}

Object.keys(obj).forEach((key, value) => {
	console.log(key, obj[key]);
})
OUTPUT : username1 santa
OUTPUT : username2 rudolph
OUTPUT : username3 grinch

Object.values(obj).forEach(value =>{
	console.log(value);
})

OUTPUT : santa
OUTPUT : rudolph
OUTPUT : grinch

Object.entries(obj).forEach(value =>{
	console.log(value);
})

OUTPUT : ["username1", "santa"]
OUTPUT : (2) ["username2", "rudolph"]
OUTPUT : (2) ["username3", "grinch"]

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', ' ');
})
OUTPUT : ["santa 1", "rudolph 2", "grinch 3"]



// 			 				 ***********
// 			 				 *   ES10  *
// 			 				 ***********

    flat()
// *********
const array = [ [1, 2, 3], [4, 5, 6]];
array.flat() // Default is .flat(1)
OUTPUT : [1, 2, 3, 4, 5, 6]

const array2 = [ [1, 2, 3], [4, [5], 6]];

array2.flat()
OUTPUT : [1, 2, 3, 4,[ 5], 6]

array2.flat(2)
OUTPUT : [1, 2, 3, 4, 5, 6]

//flat() can also be used rto clean up data

const pet = ["dog", "cat",,,,,,, "lion"]
pet.flat()
OUTPUT : ["dog", "cat", "lion"]


    flatMap()
// ***********
const names = [['sell', 'well'], 'bell', ['tell', 'hell'], [[[[['cell']]]]], 'yel', ['dell'], 'gel'];

const newnames = names.flatMap(name => name + 'o');
OUTPUT : ["sell,wello", "bello", "tell,hello", "cello", "yelo", "dello", "gelo"]

//   **************

const userEmail1 = '		annaKendrick@gmail.com'
const userEmail2 = 'KendrickLamar@gmail.com		'

console.log(userEmail1.trimStart())
OUTPUT : [annaKendrick@gmail.com

console.log(userEmail2.trimEnd())
OUTPUT : [KendrickLamar@gmail.com

//   **************

    fromEnteries() - Transforms a list of key-value pairs into an object;
//  **************

userProfiles = [['mark', 23], ['zeke', 24], ['jaehyun', 25]]

Object.fromEntries(userProfiles)
OUTPUT : {mark: 23, zeke: 24, jaehyun: 25}

//  **************

 	try { } catch { }
//  *****************

try { 
   bob + "hi";
}catch { 
console.log("YOU MESSED UP!!")
}



















































