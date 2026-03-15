const membersDiv = document.querySelector("#members");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

const url = "data/members.json";

// Fetch members from JSON
async function getMembers() {
    try {
        const response = await fetch(url);
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

// Display member cards
function displayMembers(members) {
    membersDiv.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <h2>${member.companyName}</h2>
        <img src="images/${member.image}" alt="Logo of ${member.companyName}" loading="lazy">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>
            <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
        </p>
        <p>Membership Level: ${member.membershipLevel}</p>
        `;

        membersDiv.appendChild(card);
    });
}

// Toggle between grid and list view
gridBtn.addEventListener("click", () => {
    membersDiv.className = "grid";
});

listBtn.addEventListener("click", () => {
    membersDiv.className = "list";
});

// Footer: current year and last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Load members
getMembers();