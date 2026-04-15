import { displayData } from "./display.js";

export async function getData() {
  try {
    const response = await fetch("data/tech.json");
    const data = await response.json();

    displayData(data);

    const beginners = data.filter(item => item.difficulty === "Beginner");
    console.log(beginners);

  } catch (error) {
    console.error(error);
  }
}