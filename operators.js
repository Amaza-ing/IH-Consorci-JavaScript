// Spread & Rest Operators

const names = ["Alberto", "Beatriz", "Carmen"];
console.log(...names);

const namesCopy = [...names];
console.log(namesCopy);

function sum(...numbers) {
  console.log(numbers);
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(10, 20, 30, 40));


// Optional Chaining ?.

// const book = {
//   title: "Harry Potter",
//   pages: 200,
//   author: "J.K. Rowling",
// }

let book = null;

console.log(book?.title);


// Nullish Coalescing ??

const name = null;

const defaultName = name ?? "invitado";
console.log("nombre: ", defaultName);

const price = null;

const defaultPrice = price ?? 1;
console.log(defaultPrice);


// Operador Ternario ? :

let grade = 3;

let result = grade >= 5 ? "aprobado" : "suspendido";
console.log(result);


