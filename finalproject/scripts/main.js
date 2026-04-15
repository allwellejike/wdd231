import { getData } from "./fetch.js";
import { initModal } from "./modal.js";
import { checkVisit } from "./storage.js";

getData();
initModal();

/* LOCAL STORAGE */
if (!checkVisit()) {
  alert("Welcome to Tech Learning Hub!");
  localStorage.setItem("visited", "true");
}