// Estructuras de control de flujo
// Condicionales

// if/else

let myCondition = false;

if (myCondition) {
  console.log("La condición se cumple");
} else {
  console.log("La condición no se cumple");
}

let age = 200;

if (age < 18) {
  console.log("El usuario es menor de edad");
} else if (age <= 65) {
  console.log("El usuario es adulto en edad de trabajar");
} else if (age <= 150) {
  console.log("El usuario tiene edad de estar jubilado");
} else {
  console.log("Esa edad es imposible");
}

let price = 50;

if (price === 0) {
  console.log("El producto es gratis");
} else if (price !== 100) {
  console.log("El producto no vale 100 €");
} else {
  console.log(`El producto cuesta ${price}€`);
}

let myNumber = 10;

if (myNumber % 2 === 0) {
  console.log("El número es par");  
} else {
  console.log("El número es impar");  
}


// switch

let day = "martes";

switch (day) {
  case "lunes":
    console.log("Primer día de la semana");
    break;
  case "martes":
    console.log("Segundo día de la semana");
    break;
  case "viernes":
    console.log("Casi fin de semana");
    break;
  default:
    console.log("Día no reconocido");
}

// Operador ternario

let grade = 6;

let studentResult = grade >= 5 ? "passed" : "failed";
console.log("Student Result: ", studentResult);

let earnings = 5000;

let personStatus =
  earnings <= 400
    ? "the person is poor"
    : earnings <= 1000
    ? "the person is normal"
    : "the person is rich";
console.log(personStatus);

// Lógica booleana

const book = {
  title: "Harry Potter",
  pages: 200,
  price: 40,
};

if (book.price <= 30 && book.pages > 150) {
  console.log("Me compro el libro");
} else {
  console.log("No me lo compro");
}

// C1 | C2
// T && T  = T
// F && T  = F
// T && F  = F
// F && F  = F

const movie = {
  title: "El Señor de los Anillos",
  duration: 300,
  hasAnyOscars: false,
};

if (movie.hasAnyOscars || movie.duration >= 120) {
  console.log("Voy al cine");  
} else {
  console.log("No voy al cine");  
}

// C1 | C2
// T || T  = T
// F || T  = T
// T || F  = T
// F || F  = F


const c1 = true;
const c2 = false;
const c3 = true;

if (c1 && (c2 || c3)) {
  console.log("La condición general se cumple");  
} else {
  console.log("La condición general no se cumple");  
}


let isWhiteColor = true;

if (!isWhiteColor) {
  console.log("Tus paredes no son blancas");  
}

//   T |  F
// ! F |  T 


// Valores Truthy & Falsy

let condition = {};

if (condition) {
  console.log("La condición es Truthy");  
} else {
  console.log("La condición es Falsy");  
}

// Truthy     |    Falsy
// true       |    false
// "asdf"     |    ""
// 1234       |    0
// []         |    undefined
// {}         |    null


let username = "";

if (!username) {
  console.log("Necesitas un nombre de usuario!");  
}

let quantity = 0;

if (!quantity) {
  console.log("No has seleccionado ningún producto");  
}


// Comportamiento del && y el ||

let condition2 = "string1" && "string2";
console.log("Condición: ", condition2);

let condition3 = 1234 || console.log("Hola!");
console.log("Condición: ", condition3);

let myUsername = "";

let displayName = myUsername || "Invitado";
console.log(`Hola ${displayName}`);


// Conversión a booleano

console.log(Boolean("asdf"));
console.log(!!"asdf");




