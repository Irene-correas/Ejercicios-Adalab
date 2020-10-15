const button = document.querySelector(".btn");

function changeText() {
  const paragraph = document.querySelector(".text");
  paragraph.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
};

button.addEventListener('click', changeText);
