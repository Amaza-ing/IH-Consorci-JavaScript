console.log("DOM");

// Seleccionar elementos del DOM

const title = document.getElementById("main-title");
console.log(title);

const items = document.getElementsByClassName("list-item");
console.log(items);

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

const firstItem = document.querySelector(".list-item");
console.log(firstItem);

const allItems = document.querySelectorAll(".list-item");
console.log(allItems);

// Manipular elementos del DOM

title.textContent = "Nuevo Título";

document.querySelector("#content").innerHTML =
  "<strong>Texto en negrita</strong>";


const link = document.querySelector("a");
link.setAttribute("href", "https://www.google.com");
link.textContent = "Ir a Google";
console.log(link.getAttribute("href"));

document.body.style.backgroundColor = "lightblue";


const list = document.querySelector(".list");

list.classList.add("big");
list.classList.remove("red");


const newP = document.createElement("p");
newP.textContent = "Este es un nuevo párrafo";
document.body.appendChild(newP);

console.log(paragraphs[1]);
const elementToRemove = paragraphs[1];
elementToRemove.remove();

console.log(list.innerHTML);
list.innerHTML = "";


// Eventos

const btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener("click", () => {
  console.log("El botón se ha clicado");
  document.body.style.backgroundColor = "green";
})

document.addEventListener("keydown", (e) => {
  console.log("Tecla presionada: ", e.key);  
})

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameElement = document.querySelector("#username");
  const passwordElement = document.querySelector("#password");

  const username = usernameElement.value;
  const password = passwordElement.value;

  console.log("Formulario Enviado");
  console.log(username, password);  
})