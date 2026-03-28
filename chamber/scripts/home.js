// ------------------- WEATHER API -------------------
const apiKey = "0c9f48b5cebaf6e2b9134f9daacf3e34"; // <-- Replace with your actual API key
const lat = 4.82;  // Latitude of Orogbum
const lon = 7.03;  // Longitude of Orogbum

const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");
const forecastEl = document.getElementById("forecast");

// Fetch current weather
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        tempEl.textContent = data.main.temp.toFixed(1);
        descEl.textContent = data.weather[0].description;
    } catch (error) {
        console.error("Weather error:", error);
        tempEl.textContent = "-";
        descEl.textContent = "Unable to load weather";
    }
}

// Fetch 3-day forecast
async function getForecast() {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();

        forecastEl.innerHTML = "";

        for (let i = 0; i < 3; i++) {
            const day = data.list[i * 8]; // every 8 intervals = 24 hours
            if (!day) break;

            const li = document.createElement("li");
            li.textContent = `${new Date(day.dt_txt).toLocaleDateString('en-GB')}: ${day.main.temp.toFixed(1)}°C, ${day.weather[0].description}`;
            forecastEl.appendChild(li);
        }
    } catch (error) {
        console.error("Forecast error:", error);
        forecastEl.innerHTML = "<li>Error loading forecast</li>";
    }
}

// ------------------- SPOTLIGHT MEMBERS -------------------
const spotlightContainer = document.getElementById("spotlight-container");
const membersUrl = "data/members.json";

async function getSpotlightMembers() {
    try {
        const response = await fetch(membersUrl);
        const members = await response.json();

        // Filter Gold (3) or Silver (2)
        const eligible = members.filter(m => m.membershipLevel === 3 || m.membershipLevel === 2);

        // Shuffle and select 2–3
        const shuffled = eligible.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, Math.min(3, shuffled.length));

        // Clear container
        spotlightContainer.innerHTML = "";

        // Display members
        selected.forEach(member => {
            const div = document.createElement("div");
            div.classList.add("card"); // For consistent styling

            div.innerHTML = `
                <h3>${member.companyName}</h3>
                <img src="images/${member.image}" alt="Logo of ${member.companyName}" loading="lazy">
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
                <p>Membership: ${member.membershipLevel === 3 ? "Gold" : "Silver"}</p>
            `;
            spotlightContainer.appendChild(div);
        });

    } catch (error) {
        console.error("Spotlight members error:", error);
        spotlightContainer.innerHTML = "<p>Error loading members</p>";
    }
}

// ------------------- INIT -------------------
getWeather();
getForecast();
getSpotlightMembers();

const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;