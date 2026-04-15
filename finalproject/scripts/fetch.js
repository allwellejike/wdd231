import { getData } from "./fetch.js";
import { initModal } from "./modal.js";

getData();
initModal();

/* LOCAL STORAGE */
if (!localStorage.getItem("visited")) {
  alert("Welcome to Tech Learning Hub!");
  localStorage.setItem("visited", "true");
}