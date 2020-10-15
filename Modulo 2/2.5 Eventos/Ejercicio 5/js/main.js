const documentColor = document.querySelector("body");

function changeColors(event) {
  if (event.key === "r") {
    documentColor.classList.add("red");
  } else if (event.key === "m") {
    documentColor.classList.add("purple");
  }
}

document.addEventListener("keydown", changeColors);
