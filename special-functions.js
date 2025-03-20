// setTimeout & setInterval

// let counter = 0;
// const intervalId = setInterval(() => {
//   console.log("Dentro del interval");
//   console.log("Counter: ", counter);
//   counter++;
// }, 500);

// const timeout1Id = setTimeout(() => {
//   console.log("Hola");
// }, 2000);

// const timeout2Id = setTimeout(() => {
//   console.log("Adiós");
//   clearInterval(intervalId);
// }, 3000);

// console.log("id 1: ", timeout1Id);
// console.log("id 2: ", timeout2Id);

// clearTimeout(timeout1Id);


// requestAnimationFrame

// function animate() {
//   console.log("Dibujado en cada frame");
//   requestAnimationFrame(animate);
// }

// requestAnimationFrame(animate);






// const box = document.getElementById("box"); // Elemento a animar
// let positionX = 0; // Posición en X
// let positionY = 0; // Posición en Y
// const speed = 5; // Velocidad del movimiento

// const keys = {
//   ArrowUp: false,
//   ArrowDown: false,
//   ArrowLeft: false,
//   ArrowRight: false,
// };

// // Detectar cuándo una tecla es presionada
// document.addEventListener("keydown", (event) => {
//   if (keys.hasOwnProperty(event.key)) {
//     keys[event.key] = true;
//   }
// });

// // Detectar cuándo una tecla es soltada
// document.addEventListener("keyup", (event) => {
//   if (keys.hasOwnProperty(event.key)) {
//     keys[event.key] = false;
//   }
// });

// // Función de animación
// function animate() {
//   if (keys.ArrowUp) positionY -= speed;
//   if (keys.ArrowDown) positionY += speed;
//   if (keys.ArrowLeft) positionX -= speed;
//   if (keys.ArrowRight) positionX += speed;

//   // Restringimos los límites para que no se salga de la pantalla
//   positionX = Math.max(0, Math.min(window.innerWidth - 100, positionX));
//   positionY = Math.max(0, Math.min(window.innerHeight - 100, positionY));

//   box.style.transform = `translate(${positionX}px, ${positionY}px)`;

//   requestAnimationFrame(animate); // Continuar la animación
// }

// // Iniciar la animación
// requestAnimationFrame(animate);



// debounce

function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args)
    }, delay);
  }
}

const logMessage = debounce(() => {
  console.log("Ejecutando después de escribir");  
}, 500);

document.addEventListener("keydown", logMessage);


// throttle

function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
}

const logThrottle = throttle(
  () => console.log("Ejecutado con limitación"),
  1000
);

logThrottle(); // Se ejecuta inmediatamente
setTimeout(logThrottle, 1100); // Se ejecuta después de 1.1 segundos

// Ejemplos comunes:

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scrolling...");
  }, 500)
); // Sólo se ejecutará como máximo cada 500 ms

window.addEventListener(
  "resize",
  throttle(() => {
    console.log("Ventana redimensionada");
  }, 1000)
); // Sólo se ejecutará cada segundo

// const button = document.querySelector("#btn");
// button.addEventListener(
//   "click",
//   throttle(() => {
//     console.log("Botón clickeado");
//   }, 2000)
// ); // Sólo permite un clic cada 2 segundos
