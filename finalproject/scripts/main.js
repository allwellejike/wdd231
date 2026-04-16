import { getData } from "./fetch.js";
import { initModal } from "./modal.js";

getData();
initModal();

// LOCAL STORAGE
if (!localStorage.getItem("visited")) {
  alert("Welcome to Tech Learning Hub!");
  localStorage.setItem("visited", "true");
}

// HAMBURGER MENU
const menuBtn = document.getElementById("menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// ACTIVE NAV LINK
const links = document.querySelectorAll("nav a");
const currentPage = window.location.href;

links.forEach(link => {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});