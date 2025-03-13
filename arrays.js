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

const words = ["Hola", "", "mundo", "patata", ""];
console.log(words.join(" "));
console.log(words.toString());

const products = [
  {
    name: "Ordenador",
    price: 1000,
    isForSale: true,
  },
  {
    name: "Teclado",
    price: 30,
    isForSale: true,
  },
  {
    name: "Ratón",
    price: 20,
    isForSale: false,
  },
];

// forEach

words.forEach((word, index) => console.log(index, word));

const numArray = [10, 21, 30, 41];

numArray.forEach((number) => {
  if (number % 2 === 0) {
    console.log(number);
  }
});

products.forEach((product) => console.log(product));


// map

const doubleNumbers = numArray.map((number) => number * 2);
console.log(doubleNumbers);

const capitalWords = words.map((word) => word.toUpperCase());
console.log(capitalWords);

const taxedPrices = products.map((product) => product.price * 1.21);
console.log(taxedPrices);


// filter

const filteredNumbers = numArray.filter((number) => number % 2 !== 0);
console.log(filteredNumbers);

const filteredWords = words.filter((word) => word.length > 0);
console.log(filteredWords);

const filteredProducts = products.filter((product) => product.isForSale);
console.log(filteredProducts);



