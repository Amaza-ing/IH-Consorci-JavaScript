console.log("Hola de nuevo!");


// Formas de declarar una variable

var myName = "Adrián"; // Forma obsoleta de declarar variables, porque sufre Hoisting
console.log(myName);

let myNumber = 1234;
console.log(myNumber);

myNumber = 999;
console.log("My Number: ", myNumber);

const pi = 3.1416;
console.log("Pi: ", pi);


// Tipos de variables

let myString = "Soy una cadena de texto";
let myNum = 1234;
let myBoolean = true;
let myUndefined;
let myNull = null;
let myArray = [10, 20, 30, 40];
let myObject = {
  name: "Adrián",
  country: "Spain",
  age: 34
}

console.log(typeof myString);
console.log(typeof myNum);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof null);
console.log(typeof myArray);
console.log(typeof myObject);

console.log("My Array: ", myArray);
console.log("My Object: ", myObject);


// Formas de crear un string

let doubleQuote = "Esto es un \"string\" con 'comillas' dobles";
console.log(doubleQuote);

let singleQuote = 'Esto es un "string" con \'comillas\' simples';
console.log(singleQuote);

let templateString = `Esto es un template string, y admite variables: ${myNum}`;
console.log(templateString);

console.log("Este es mi número: " + myNum);


// Métodos y Propiedades de los strings

myString = "Hola a todos!";

console.log("Length: ", myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.includes("patata"));
console.log(myString.toLowerCase().includes("hola"));
console.log(myString.replace("Hola", "Adiós"));
console.log(myString.trim());


// Operadores básicos

let num1 = 10;
let num2 = 4;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

num1 += 1;
console.log(num1);

num1++
console.log(num1);


// Mensajes por cosola

console.log("Esto es un mensaje");
console.warn("Esto es un warning");
console.error("Esto es un mensaje de error");

console.table([
  { name: "Sara", age: 25 },
  { name: "Luis", age: 30 },
]);

