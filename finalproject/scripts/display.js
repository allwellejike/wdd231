export function displayData(data) {
  const container = document.querySelector("#tech-container");

  if (!container) return;

  container.innerHTML = "";

  const page = window.location.pathname;

  let filteredData = data;

  // HOME → only 3 items
  if (page.includes("index.html")) {
    filteredData = data.slice(0, 3);
  }

  // LEARNING → ALL 15 items
  else if (page.includes("learning.html")) {
    filteredData = data;
  }

  // SERVICES → no display
  else if (page.includes("services.html")) {
    return;
  }

  filteredData.forEach(item => {
    const div = document.createElement("div");

    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <h3>${item.title}</h3>
      <p><strong>Category:</strong> ${item.category}</p>
      <p><strong>Level:</strong> ${item.level}</p>
      <p>${item.description}</p>
      <p><strong>Duration:</strong> ${item.time}</p>
      <button class="open-modal" data-title="${item.title}">
        More Info
      </button>
    `;

    container.appendChild(div);
  });
}