"use strict";
//Ejercicio 1 y 3 //
document.querySelector("h1").innerHTML =
  "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";

let paragraphElement = document.querySelector(".text");
paragraphElement.innerHTML = paragraphElement.innerHTML + "Mundo";

//Ejercicio 4
const titleElement = document.querySelector(".title");
const adalaber1 = document.querySelector(".ada1");
const adalaber2 = document.querySelector(".ada2");

titleElement.innerHTML = titleElement.innerHTML + adalaber1.innerHTML;
