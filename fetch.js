const API_URL = "https://jsonplaceholder.typicode.com/users";

let users = null;

// function showUsers() {
//   console.log(users);
// }

// fetch(API_URL)
//   .then((response) => response.json())
//   .then((data) => {
//     users = data;
//     showUsers();
//   })
//   .catch((error) => console.log(error));

// console.log("última linea");


let selectedUser = null;

function showUser(currentUser) {
  console.log(currentUser);  
}

// fetch(`${API_URL}/1`)
//   .then((response) => response.json())
//   .then((data) => {
//     selectedUser = data
//     showUser(selectedUser);
//   })
//   .catch((error) => console.log(error))


// console.log(selectedUser?.name);


// Async / Await

async function getUser(userId) {
  try {
    const response = await fetch(`${API_URL}/${userId}`);
    const data = await response.json();
    selectedUser = data;
    showUser(selectedUser);
  } catch(e) {
    console.log(e);    
  }
}

getUser(3);
