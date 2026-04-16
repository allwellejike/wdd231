import { getData } from "./fetch.js";
import { initModal } from "./modal.js";

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

// =======================
// 🟢 RENDER YOUR 15 CARDS
// =======================
const container = document.getElementById("tech-container");

getData().then(data => {
  data.forEach(item => {
    const card = document.createElement("div");

    card.innerHTML = `
      <img src="${item.image}" alt="">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p><strong>Level:</strong> ${item.level}</p>
      <p><strong>Time:</strong> ${item.time}</p>
    `;

    container.appendChild(card);
  });
});