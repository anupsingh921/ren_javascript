class MyComplexNumber {
  constructor(realPart, imaginaryPart) {
    this._realPart = realPart;
    this._imaginaryPart = imaginaryPart;
  }

  add(complexNum) {
    this._realPart += complexNum.realPart;
    this._imaginaryPart += complexNum.imaginaryPart;
  }

  get realPart() {
    return this._realPart;
  }

  get imaginaryPart() {
    return this._imaginaryPart;
  }

  set imaginaryPart(newImaginaryPart) {
    this._imaginaryPart = newImaginaryPart;
  }

  set realPart(newRealPart) {
    this._realPart = newRealPart;
  }
}

let complexNumber1 = new MyComplexNumber(2, 4);
console.log(complexNumber1.realPart, complexNumber1.imaginaryPart);

complexNumber1.realPart = 10;
complexNumber1.imaginaryPart = 10;

let complexNumber2 = new MyComplexNumber(6, 2);
complexNumber1.add(complexNumber2);

console.log(`${complexNumber1.realPart}+${complexNumber1.imaginaryPart}i`);

