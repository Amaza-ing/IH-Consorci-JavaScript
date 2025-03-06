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

const multiply = function (num1, num2) {
  return num1 * num2;
};

const multiplyResult = multiply(2, 10);
console.log("Multiply Result: ", multiplyResult);

console.log("Multiplication: ", multiply(3, 5));

// Funciones Flecha (Arrow Functions)

const sustract = (num1, num2) => {
  return num1 - num2;
};

const sustractResult = sustract(10, 5);
console.log("Sustract Result: ", sustractResult);

// const toUpper = (str) => {
//   return str.toUpperCase();
// }

const toUpper = (str) => str.toUpperCase();

console.log(toUpper("hola a todos!"));

// Valores por defecto

function greet(name = "Invitado") {
  console.log(`Hola, ${name}`);
}

greet();

const defaultUser = {
  name: "John Doe",
  email: "john@email.com",
};

function getUserInfo(message, user = defaultUser) {
  if (message) {
    console.log(message);
  }
  console.log("User Name: ", user.name);
  console.log("User Email: ", user.email);
}

getUserInfo("asdfasdf");


// Parámetros rest

function sumAll(...numbers) {
  let result = 0;

  for (number of numbers) {
    result += number;
  }

  return result;
}

console.log(sumAll(1, 2, 3, 4));


// Spread Operator

const numberArray = [10, 20, 30];

function sumThree(n1, n2, n3) {
  return n1 + n2 + n3;
}

console.log(numberArray);

console.log(...numberArray);

console.log(sumThree(...numberArray));


// Callbacks


function functionCaller(callback) {
  console.log("Dentro de functionCaller");
  callback();
}

const f = function() {
  console.log("Soy la función F");  
}

const g = function() {
  console.log("Soy la función G");  
}

functionCaller(f);
functionCaller(g);


function greetUser(name, cb) {
  console.log(`Hola, ${name}!`);
  
  cb();
}

const sayGoodbye = () => {
  console.log("Adiós!");  
}

greetUser("Ana", sayGoodbye);

// greetUser("Ana", () => {
//   console.log("Adiós!");  
// })


const nameArray = ["Alberto", "Beatriz", "Carlos", "David"];

nameArray.forEach((name) => console.log(name));


setTimeout(() => {
  console.log("Esto no saldrá hasta dentro de 2 segundos");
}, 2000)


// Funciones Autoinvocadas

// (function () {
//   console.log("Función autoinvocada");  
// })();