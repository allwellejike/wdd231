// WEATHER API
const url = "https://api.openweathermap.org/data/2.5/weather?lat=4.82&lon=7.03&units=metric&appid=YOUR_API_KEY";

async function getWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("temp").textContent = data.main.temp;
    document.getElementById("desc").textContent = data.weather[0].description;

  } catch (error) {
    console.log("Weather error:", error);
  }
}

getWeather();


// FORECAST (simple mock 3-day)
async function getForecast() {
  const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=4.82&lon=7.03&units=metric&appid=YOUR_API_KEY";

  try {
    const response = await fetch(forecastUrl);
    const data = await response.json();

    const list = document.getElementById("forecast");
    list.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      const day = data.list[i * 8];
      const li = document.createElement("li");
      li.textContent = `${day.main.temp}°C`;
      list.appendChild(li);
    }

  } catch (error) {
    console.log(error);
  }
}

getForecast();


// SPOTLIGHTS
async function getSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();

  const filtered = data.filter(m => m.membership === "Gold" || m.membership === "Silver");

  const random = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

  const container = document.getElementById("spotlight-container");

  random.forEach(member => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.image}" alt="${member.name}">
      <p>${member.phone}</p>
      <p>${member.address}</p>
      <a href="${member.website}" target="_blank">Visit</a>
      <p>${member.membership}</p>
    `;

    container.appendChild(div);
  });
}

getSpotlights();