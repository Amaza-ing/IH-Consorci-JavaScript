let a = 10;
let b = a;

console.log("a:", a, "\n b:", b);

b = 20;

console.log("a:", a, "\n b:", b);


const o1 = {
  name: "Ordenador",
  price: 1000
}
console.log(o1);

const o2 = o1;
console.log(o2);

o2.price = 500;
console.log(o2);

console.log(o1);


// Shallow Copy

const product = {
  name: "ordenador",
  price: 1000,
  isForSale: true,
  details: {
    color: "black",
    weight: 3
  }
}

const productCopy1 = Object.assign({}, product);
productCopy1.price = 222;
console.log(productCopy1);
console.log(product);

const productCopy2 = {...product};
productCopy2.name = "Pantalla";
productCopy2.details.weight = 10;
console.log(productCopy2);
console.log(product);


// Deep Copy

const productStringified = JSON.stringify(product);
console.log(productStringified);

const productDeepCopied = JSON.parse(productStringified);
console.log(productDeepCopied);

productDeepCopied.details.color = "white";
console.log(productDeepCopied);
console.log(product);

const productCopy = JSON.parse(JSON.stringify(product));
productCopy.details.color = "red";
console.log(productCopy);
console.log(product);

// structuredClone

const productStructuredCopy = structuredClone(product);
productStructuredCopy.details.color = "blue";
console.log(productStructuredCopy);
console.log(product);











