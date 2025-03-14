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

const words = ["Hola", "", "mundo", "Patata", ""];
console.log(words.join(" "));
console.log(words.toString());

const products = [
  {
    id: 1,
    name: "Ordenador",
    price: 1000,
    isForSale: true,
  },
  {
    id: 2,
    name: "Teclado",
    price: 30,
    isForSale: true,
  },
  {
    id: 3,
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


// Reduce

const numbersArray = [10, 20, 30, 40];

const sumResult = numbersArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0)
console.log("Sum Result: ", sumResult);

const concatWords = words.reduce((acc, curr) => {
  return acc + " " + curr;
}, "")
console.log(concatWords);

const totalPrice = products.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);
console.log("Precio total: ", totalPrice);


// Find

const selectedNumber = numbersArray.find((number) => number > 25);
console.log(selectedNumber);

const selectedWord = words.find((word) => word.toLowerCase() === "patata");
console.log(selectedWord);

const selectedProduct = products.find((product) => product.id === 2);
console.log(selectedProduct);


// FindIndex

const numberIndex = numbersArray.findIndex((number) => number > 25);
console.log(numberIndex);

const wordIndex = words.findIndex((word) => word.toLowerCase() === "patata");
console.log(wordIndex);

const productIndex = products.findIndex((product) => product.id === 2);
console.log(productIndex);


// concat

const array1 = [1, 2];
const array2 = [3, 4];
const combined = array1.concat(array2);
console.log(combined);


// spread operator

console.log(...words);

const newWords = [...words];

function calculation(n1, n2, n3, n4) {
  return n1 + n2 * n3 / n4;
}

calculation(...combined);


// Destructuring

// const first = combined[0];
// const second = combined[1];

const [first, second] = combined;
console.log(first, second);


// Arrays multidimensionales

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]);

