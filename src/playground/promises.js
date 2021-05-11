const promise = new Promise((resolve, reject)=> {
  setTimeout(() => {
    // resolve('This is my result data');
    reject('This is reject data');
  }, 1500);
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

console.log('after');
