function getgithubprofile() {
  const user = document.querySelector(".js-text")
  const userValue = user.value;
  fetch(`https://api.github.com/users/${userValue}`)
    .then(response => response.json())
    .then(data => {
      const name = document.querySelector(".paragraph");
      const number = document.querySelector(".number");
      const img = document.querySelector("img");


      name.innerHTML = data.login;
      number.innerHTML = data.public_repos;
      img.src = data.avatar_url;
      img.alt = "Foto Avatar";
    });
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", getgithubprofile);