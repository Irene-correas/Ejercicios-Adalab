"use strict";
const button = document.querySelector(".btn");
const p = document.querySelector(".paragraph");


function getCharacter() {
  let character = document.querySelector(".text").value;
  fetch(`https://swapi.dev/api/people/?search=${character}`)
    .then((result) => result.json())
    .then((data) => {
      p.innerHTML = `${data.results[0].name} ${data.results[0].gender}`;
    })
}

button.addEventListener("click", getCharacter);