'use strict';

let notification = document.querySelector(
  ".container");
let head = document.querySelector(
  ".title");
let paragraph = document.querySelector(
  ".text");


if (document.querySelector('.success')) {
  head.innerHTML = 'CORRECTO';
  paragraph.innerHTML = 'Los datos son correctos';

} else if (notification.querySelector('.error')) {
  head.innerHTML = 'ERROR';
  paragraph.innerHTML = 'Ha surgido un error';

} else if (notification.querySelector('.warning')) {
  head.innerHTML = 'AVISO';
  paragraph.innerHTML = 'Tenga cuidado';
}