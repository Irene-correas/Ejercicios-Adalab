'use sctrict';

let cestaPeras = {
  max: 20,
  min: 0,
  actual: 8,
  initial: 2
};

cestaPeras.addPears = function () {
  return (this.actual + 1);

}
cestaPeras.removePears = function () {
  return (this.actual - 1);

}
cestaPeras.changePears = function () {
  return (this.actual = this.initial);

}

console.log(cestaPeras.addPears());
console.log(cestaPeras.removePears());
console.log(cestaPeras.changePears());








