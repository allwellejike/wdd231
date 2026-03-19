const membersDiv = document.querySelector("#members");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

const url = "data/members.json";
let membersData = [];

// Fetch members from JSON
async function getMembers() {
    try {
        const response = await fetch(url);
        membersData = await response.json();
        displayMembers(membersData, "grid"); // default view
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

// Display members function
function displayMembers(members, view = "grid") {
    membersDiv.innerHTML = "";
    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Only show images in grid view
        let imgHTML = view === "grid" 
            ? `<img src="images/${member.image}" alt="Logo of ${member.companyName}" loading="lazy">`
            : '';

        card.innerHTML = `
            <h2>${member.companyName}</h2>
            ${imgHTML}
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
            <p>Membership Level: ${
                member.membershipLevel === 3 ? "Gold" :
                member.membershipLevel === 2 ? "Silver" : "Member"
            }</p>
        `;
        membersDiv.appendChild(card);
    });
}

// Event listeners for toggle buttons
gridBtn.addEventListener("click", () => {
    membersDiv.classList.add("grid");
    membersDiv.classList.remove("list");
    displayMembers(membersData, "grid");
});

listBtn.addEventListener("click", () => {
    membersDiv.classList.add("list");
    membersDiv.classList.remove("grid");
    displayMembers(membersData, "list");
});

// Footer: year and last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

getMembers();