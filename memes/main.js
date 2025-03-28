const memeList = document.querySelector(".meme-list");

function addMemeItem(meme) {
  const li = document.createElement("li");
  li.setAttribute("id", meme.id);

  const h2 = document.createElement("h2");
  h2.textContent = meme.name;

  const img = document.createElement("img");
  img.setAttribute("src", meme.url);
  img.setAttribute("height", 300);

  li.appendChild(h2);
  li.appendChild(img);

  memeList.appendChild(li);
}

async function getMemes(start = 0, quantity = 1) {
  try {
    const API_URL = "https://api.imgflip.com/get_memes";
    const response = await fetch(API_URL);
    const datos = await response.json();
    // console.log(datos);
    const memes = datos.data.memes;
    // console.log(memes);
    const selectedMemes = memes.slice(start, start + quantity);
    console.log(selectedMemes);
    
    selectedMemes.forEach((meme) => {
      addMemeItem(meme);
    })
  } catch (e) {
    console.log(e);    
  }
}

const memesForm = document.querySelector("#memes-form");
const startInput = document.querySelector("#start");
const quantityInput = document.querySelector("#quantity");

memesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const start = Number(startInput.value);
  const quantity = Number(quantityInput.value);

  // console.log("Start: ", start, "Quantity: ", quantity);
  memeList.innerHTML = "";
  getMemes(start, quantity);
})


const randomBtn = document.querySelector("#random-btn");

randomBtn.addEventListener("click", () => {
  const maxNum = 100;
  const randomNumber = Math.floor(Math.random() * maxNum);
  console.log(randomNumber);
  getMemes(randomNumber);
})