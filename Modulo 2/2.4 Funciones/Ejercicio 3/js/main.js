// tres ejemplos para el mismo resultado
// con return
function iva(a) {
  const resultIva = a * 0.21;
  const resultTotal = resultIva + a;
  const ticket = `Precio sin IVA: ${a}, IVA: 2,1 y Total: ${resultTotal}`;
  return ticket;
}
console.log(iva(70));
// sin return
function iva(a) {
  const resultIva = a * 0.21;
  const resultTotal = resultIva + a;
  console.log(`Precio sin IVA: ${a}, IVA: 2,1 y Total: ${resultTotal}`);
}
iva(70);
// lo mismo pero metido en un HTML
function iva(a) {
  const resultIva = a * 0.21;
  const resultTotal = resultIva + a;
  console.log();
  const ticket = `Precio sin IVA: ${a}, IVA: 2,1 y Total: ${resultTotal}`;
  return ticket;
}
const texto = document.querySelector(".text");
texto.innerHTML = iva(80);