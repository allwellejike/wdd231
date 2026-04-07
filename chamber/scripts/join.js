// Add timestamp
document.addEventListener("DOMContentLoaded", () => {
  const timestamp = document.getElementById("timestamp");
  if (timestamp) {
    timestamp.value = new Date().toISOString();
  }

  // MODALS
  const npModal = document.getElementById("npModal");
  const bronzeModal = document.getElementById("bronzeModal");
  const silverModal = document.getElementById("silverModal");
  const goldModal = document.getElementById("goldModal");

  document.getElementById("npBtn").addEventListener("click", () => npModal.showModal());
  document.getElementById("bronzeBtn").addEventListener("click", () => bronzeModal.showModal());
  document.getElementById("silverBtn").addEventListener("click", () => silverModal.showModal());
  document.getElementById("goldBtn").addEventListener("click", () => goldModal.showModal());

  // Close buttons
  document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("dialog").forEach(d => d.close());
    });
  });
});