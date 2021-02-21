const fs = require('fs')

const file = fs.readFileSync('./challenge.txt').toString().split('');
console.time('start');
const n = file.length;
var count = 0;
//1. what floor santa ends up on
for(let i = 0; i < n; i++){
	if (file[i] === '('){
		count += 1;
	}
	if (file[i] === ')') {
		count -= 1;
	}
}
console.log(count);

// 2. when does santa first enter the basement
var count_up = 0;
var count_down = 0;

for(let i = 0; i < n; i++){
	if (file[i] === '('){
		count_up += 1;
	}
	if (file[i] === ')') {
		count_down += 1;
	}
	if ((count_down - count_up) > 0) {
		console.log(i);
		break;
	}
}