// Bucles (loops)


// Bucle for

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const fruits = ["Manzana", "Plátano", "Pera"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  console.log(fruits[i].toUpperCase());
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// Bucle while

let counter = 0;

while (counter < 5) {
  console.log("While counter: ", counter);

  counter++;
}


// Do While

counter = 10000;

do {
  console.log("Do While counter: ", counter);

  counter++;
} while (counter < 10);


// For of

for (const fruit of fruits) {
  console.log(fruit);  
}


// For in

const person = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid"
}

for (const key in person) {
  console.log(`${key}: ${person[key]}`);  
}


// break & continue

for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  
  if (i === 5) {
    continue;
  }
  console.log("i: ", i);  
}


// forEach

fruits.forEach((fruit) => {
  console.log("Fruit: ", fruit);  
})
