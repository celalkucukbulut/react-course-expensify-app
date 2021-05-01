// const person = {
//     name : 'celal',
//     age : 23,
//     loc : {
//         city :'Kast',
//         temp : 53
//     }
// };

// const{name : personName = 'Anonymous', age} = person;

// console.log(`${personName} is ${age}.`);
// const{city, temp : temperature} = person.loc;
// if (city && temperature){
//     console.log(`It is ${temperature} in ${city}. `);
// }


// const book = {
//     title :'Ego is the enemy',
//     author : 'Ryan Holiday',
//     publisher : {
//         name: 'Penguin'
//     }
// };

// const {name : publisherName = 'Self-Publish'} = book.publisher;

// console.log(publisherName);


//Array destructuring

const address = ['213 s street', 'kast', 'karadeniz', '123321'];

const [,city ,state = 'defaultState' ] = address;

console.log(`you are in ${city} ${state}`);
console.log(`you are in ${address[1]} ${address[2]}`);

const item = ['coffee', '$2', '$2.5', '$3'];

const [coffee,,price] = item;
console.log(`A medium ${coffee} costs ${price}`);


