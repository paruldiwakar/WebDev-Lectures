// 			 				 *******************
// 			 				 *  ADVANCE LOOPS  *
// 			 				 *******************

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
	'apples' : 5, 'oranges' : 10, 'grapes' : 100
     }

1.
for(let i = 0; i < basket.length; i++){
	console.log(basket[i]);
}

2.
basket.forEach(item => {
	console.log(item);
})

3. for of loop
for (item of basket){
	console.log(item);
}

3. for in loop - works with objects (it is actually enumeration).Properties of an object 
   are called enum and this loop helps us to view propeties of that object.
for(item in detailedBasket){
	console.log(item);
}