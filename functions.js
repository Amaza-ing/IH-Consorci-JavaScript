// funciones declaradas

function sayHello() {
  console.log("Hola!");
}

sayHello();

function saySomething(message) {
  console.log(message);
}

saySomething("Esto es un mensaje");
saySomething("Otra cosa");

function sum(num1, num2) {
  return num1 + num2;
}

const sumResult = sum(4, 6);

console.log("Sum Result: ", sumResult);
console.log("Sum 2: ", sum(10, 20));


// Funciones Expresadas


const multiply = function(num1, num2) {
  return num1 * num2;
}

const multiplyResult = multiply(2, 10);
console.log("Multiply Result: ", multiplyResult);


console.log("Multiplication: ", multiply(3, 5));


// Funciones Flecha (Arrow Functions)

const sustract = (num1, num2) => {
  return num1 - num2;
}

const sustractResult = sustract(10, 5);
console.log("Sustract Result: ", sustractResult);

// const toUpper = (str) => {
//   return str.toUpperCase();
// }

const toUpper = str => str.toUpperCase();

console.log(toUpper("hola a todos!"));
