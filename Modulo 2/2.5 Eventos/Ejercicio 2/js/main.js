const button = document.querySelector(".btn");


function newText() {

  let name = document.querySelector(".barra").value;
  console.log(`Hola, ${name}`);
};

button.addEventListener('click', newText);