const yearSpan =
document.querySelector("#year");
const lastModified =
document.querySelector("#lastModified");

const now = new Date();
yearSpan.textContent = now.getFullYear();

lastModified.textContent = Last Update: ${document.lastModified};