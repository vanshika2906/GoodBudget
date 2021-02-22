//
// Object Destructuring 
//

// const person = {
//     name:'Robot',
//     age:26,
//     location:{
//         city:'India',
//         temp:92
//     }
// };

// const {name : firstName = 'Anonymous',age} = person;

// console.log(`${name} is ${age}.`)

// const {city,temp:temperature} = person.location
// console.log(`It's ${temperature} in ${city}.`)

// const book = {
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher: {
//         name : 'Penguin'
//     }
// };

// const {name:publisherName = 'Stranger'} = book.publisher
// console.log(`${publisherName}`)


//
//Array Destructuring
//

// const address = ['1299 $ Junior Street', 'Philadelphia','Pennyslvania','19417'];
// const [,city,state='New York'] = address;
// console.log(`You are in ${city}, ${state}`);

const item = ['coffee(hot)','$2.00','$2.50','$2.75'];
const [name, ,mprice] = item;
console.log(`A medium ${name} costs ${mprice}`)
