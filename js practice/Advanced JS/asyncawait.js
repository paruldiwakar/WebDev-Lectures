						*********************
						* ASYNC AWAIT (ES8) *
						*********************
						
It is used to wrap asynchronous programs as synchronous and returns the resolved when 
the promise is settled. 
await says pause this function until I have something for you. When the Promise is resolved
(the function returns a Promise) then the control moves to the next line.


movePlayer(100, 'Left')
 .then(() => movePlayer(1000, 'Left'))
 .then(() => movePlayer(100, 'Right'))
 .then(() => movePlayer(300, 'Left'))

 async function PlayerStart(){
 	//pause firstmove will save the result of movePlayer(1000, 'Left')
 	const firstmove = await movePlayer(1000, 'Left'); 
 	await movePlayer(100, 'Right'); // await
 	await movePlayer(300, 'Left');
 }

fetch('http://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(console.log)

// async function

async function fetchUsers(){
	const resp = await fetch('http://jsonplaceholder.typicode.com/users')
	const data = resp.json();
	console.log(data);

}

// WITH an array of urls

urls = [
	'http://jsonplaceholder.typicode.com/users',
	'http://jsonplaceholder.typicode.com/posts',
	'http://jsonplaceholder.typicode.com/albums'
]

const getData = async function(){
 	//Destructuring
 	const [users, posts, albums] = await Promise.all(urls.map(url => 
 		fetch(url).then(resp => resp.json())
 		))
 	console.log('users', users)
 	console.log('posts', posts)
 	console.log('albums', albums)
}

**************************************************************************************

						*******************
						*      (ES9)      *
						*******************
Object spread Operator
**********************						
const animals = {
	tiger : 23,
	lion : 7,
	monkey : 5
}

const {tiger, ...rest } = animals;
Output: tiger
		23
		rest
		{lion: 7, monkey: 5}
		rest.lion
		7

___________________________________________________________________________________

FINALLY
*********
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

romise.all(urls.map(url => fetch(url).then(people => people.json())))
  .then(array => {
    throw Error
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err))
  .finally(() => console.log('extra action here'))

___________________________________________________________________________________



New for await of feature:
*************************

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/postss',
  'https://jsonplaceholder.typicode.com/albums'
]

const loopThroughUrl = (urls) => {
  for (url of urls) {
    console.log(url)
  }
}

const getData2 = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for (const request of arrayOfPromises) {
    console.log(request);
  }

  for await (const request of arrayOfPromises) {
    const data = await request.json(); 
    console.log(data)
  }
  //In this case, for-await takes each item from the array and waits for it to resolve. You'll get the first response even if the second response isn't ready yet, but you'll always get the responses in the correct order.
}

















