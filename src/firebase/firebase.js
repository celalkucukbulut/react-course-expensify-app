import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase , database as default };

// // EVENTS
// // value
// // child_removed
// // child_changed
// // child_added

// database.ref('expenses').on('child_removed', (snapshot) =>{
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) =>{
//   console.log(snapshot.key, snapshot.val());
// });

// //Exist items fires too.
// database.ref('expenses').on('child_added', (snapshot) =>{
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id : childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });


// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id : childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // });



// database.ref('expenses').push({
//   description: 'Expense Desc 1',
//   note: 'Expense note 1',
//   amount : 150000,
//   createdAt : 1232131231
// });

// //database.ref('notes/-M_BOpK1ITi4GzDLdOkE').remove();

// // database.ref('notes').push({
// //   title : 'Course Topic',
// //   body : 'React Native, Angular'
// // });


// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} in ${val.job.company}`);
// // });

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e)
// //   });

// // database.ref().set({
// //   name : 'Celal',
// //   age : 27,
// //   stressLevel : 2,
// //   job: {
// //     title : 'Engineer',
// //     company : 'Google'
// //   },
// //   location : {
// //     city : 'Kastamonu',
// //     country : 'Turkey'
// //   }
// // }).then(() => {
// //   console.log('Data saved');
// // }).catch((e) => {
// //   console.log('Data cannot save', e);
// // });

// // database.ref().update({
// //   stressLevel : 9,
// //   'job/company' : 'Amazon',
// //   'location/city' : 'İstanbul'
// // }).then(() => {
// //   console.log('Data saved');
// // }).catch((e) => {
// //   console.log('Data cannot save', e);
// // });;

// // database.ref()
// // .remove()
// // .then(() => {
// //   console.log('removed');
// // }).catch((e) => {
// //   console.log('cannot removed',e);
// // });

