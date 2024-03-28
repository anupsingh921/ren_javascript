class Person {
  constructor(fullName, favoriteFood) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
  }
  move() {
    console.log(this.fullName + " is moving");
  }
}

class Learner extends Person {
  move() {
    console.log(this.fullName + ": Learner is moving");
  }
}

let student = new Learner("Hari", "Arnav");
student.move();

console.log(student instanceof Person);
