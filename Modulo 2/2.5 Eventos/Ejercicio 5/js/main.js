const documentColor = document.querySelector("body");

function changeColors(event) {
  if (event.key === "r") {
    documentColor.classList.add("red");
    documentColor.classList.remove("purple");
  } else if (event.key === "m") {
    documentColor.classList.add("purple");
    documentColor.classList.remove("red");
  }
}

document.addEventListener("keydown", changeColors);
