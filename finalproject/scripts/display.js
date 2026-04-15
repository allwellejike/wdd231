export function displayData(data) {
  const container = document.querySelector("#tech-container");

  data.forEach(item => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.category}</p>
      <p>${item.difficulty}</p>
      <p>${item.description}</p>
      <button class="open-modal" data-title="${item.title}">
        More
      </button>
    `;

    container.appendChild(div);
  });
}