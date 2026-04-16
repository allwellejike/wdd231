// timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// menu toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// MODALS
const modals = {
  npBtn: "npModal",
  bronzeBtn: "bronzeModal",
  silverBtn: "silverModal",
  goldBtn: "goldModal",
};

Object.keys(modals).forEach(btn => {
  document.getElementById(btn).addEventListener("click", () => {
    document.getElementById(modals[btn]).showModal();
  });
});

document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest("dialog").close();
  });
});