export function initModal() {
  const modal = document.querySelector("#modal");
  const text = document.querySelector("#modal-text");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("open-modal")) {
      text.textContent = e.target.dataset.title;
      modal.showModal();
    }

    if (e.target.id === "closeModal") {
      modal.close();
    }
  });
}