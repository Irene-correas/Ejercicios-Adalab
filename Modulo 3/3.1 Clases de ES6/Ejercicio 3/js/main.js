"use strict";

class Polygon {
  constructor(numberSides, base, height) {
    this.numberSides = numberSides;
    this.base = base;
    this.height = height;
  }

  perimeter() {
    return this.numberSides * this.base;
  }

  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(base) {
    super(4, base, base);
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(4, base, height);
  }
  area() {
    return super.area() / 2;
  }
}
const cuadrado = new Square(6);
const triangulo = new Triangle(4, 3);

console.log(cuadrado.perimeter());
console.log(triangulo.perimeter());

console.log(cuadrado.area());
console.log(triangulo.area());
