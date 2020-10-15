"use sctrict";
const input = document.querySelector(".barra");
const paragraph = document.querySelector(".parrafo");


function paragraphAdd(ev) {
  const inputValue = input.value;
  paragraph.innerHTML = inputValue;
  console.log(ev.currentTarget);
  console.log(input);
}

input.addEventListener("change", paragraphAdd);

// console.log(input, paragraph)

