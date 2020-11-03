'use strict';

class Square {
  constructor(side) {
    this.side = side;
  }

  perimeter(side) {
    const perimeter = this.side * 4;
    return perimeter;
  }
  area(side) {
    const area = this.side ** 2;
    return area;
  }
}

const cuadrado = new Square(9);
const perimeterValue = cuadrado.perimeter();
console.log(perimeterValue);


const areaValue = cuadrado.area();
console.log(areaValue);
