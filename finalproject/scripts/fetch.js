import { displayData } from "./display.js";

export async function getData() {
  try {
    const response = await fetch("./data/tech.json");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    displayData(data);

    // FIXED: use "level" not "difficulty"
    const beginners = data.filter(item => item.level === "Beginner");
    console.log("Beginner items:", beginners);

  } catch (error) {
    console.error("ERROR:", error);
  }
}