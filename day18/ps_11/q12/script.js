//Q1
class MyComplexNumber {
  constructor(realPart, imaginaryPart) {
    this.realPart = realPart;
    this.imaginaryPart = imaginaryPart;
  }

  //Q2
  add(complexNum) {
    this.realPart += complexNum.realPart;
    this.imaginaryPart += complexNum.imaginaryPart;
  }
}


let complexNumber1 = new MyComplexNumber(7, 4);

let complexNumber2 = new MyComplexNumber(4, 2);

complexNumber1.add(complexNumber2);
console.log(`${complexNumber1.realPart}+${complexNumber1.imaginaryPart}i`);

