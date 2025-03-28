const username = "Carlos";

localStorage.setItem("username", username);

const recoveredUsername = localStorage.getItem("username");
console.log(recoveredUsername);

localStorage.removeItem("username");
localStorage.clear();

const user = {
  name: "Ana",
  age: 30
};

localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);
