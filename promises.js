// console.log("1");

// setTimeout(() => console.log("2"), 1000);

// console.log("3");

// Promesa

function makeRequest(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
  
      const success = true;
      if (success) {
        resolve(`La promesa se ha resuelto en el paso ${step}`);
      } else {
        reject("Ha habido un error");
      }
  
    }, 1500);
  });
}


makeRequest(1)
  .then((message) => {
    console.log(message);
    return makeRequest(2);
  })
  .then((message) => {
    console.log(message);
    return makeRequest(3);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => console.log(error));

