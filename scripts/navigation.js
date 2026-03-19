const menu = document.querySelector("#menu");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", () => {
    nav.classList.toggle("open");
});