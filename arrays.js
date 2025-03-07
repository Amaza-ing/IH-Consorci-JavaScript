const fruits = ["manzana", "banana", "cereza"];
console.log(fruits[0]);

const colors = new Array("rojo", "verde", "azul");
console.log(colors);

const emptyArray = [];
console.log(emptyArray);


fruits.push("naranja");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("fresa");
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits.indexOf("banana"));
console.log(fruits.includes("piña"));


const numbers = [10, 20, 30, 40, 50];

const sliced = numbers.slice(1, 4);
console.log(sliced);

numbers.splice(2, 1, 99);
console.log(numbers);


const words = ["Hola", "mundo", "patata"];
console.log(words.join(" "));
console.log(words.toString());







