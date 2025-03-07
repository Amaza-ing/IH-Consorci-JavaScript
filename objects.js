const person = {
  firstName: "Ana",
  lastName: "García",
  age: 30,
  isStudent: false,
};

console.log(person.firstName);

person.firstName = "María";
console.log(person);


const car = new Object();

car.brand = "Toyota";
car.model = "Corolla";
car.year = 2022;

console.log(car);


function PersonData(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age
}

const user = new PersonData("Carlos", "López", 28);
console.log(user);


class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  describe() {
    return `${this.name} es un ${this.species}`;
  }
}

const dog = new Animal("Firulais", "Perro");
console.log(dog);
console.log(dog.describe());


console.log(dog.name);
console.log(dog["species"]);


const calculator = {
  sum: function(n1, n2) {
    return n1 + n2;
  },
  subtract(n1, n2) {
    return n1 - n2;
  }
}

console.log(calculator.sum(2, 3));


console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(person.hasOwnProperty("age"));


// const firstName = person.firstName;
// const age = person.age;

const { firstName, age } = person;
console.log(firstName, age);

const { firstName: name, age: years } = person;
console.log(name, years);

