const membersDiv = document.querySelector("#members");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

const url = "data/members.json";

async function getMembers() {
    try {
        const response = await fetch(url);
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

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
            <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
            <p>Membership Level: ${
                member.membershipLevel === 3 ? "Gold" :
                member.membershipLevel === 2 ? "Silver" : "Member"
            }</p>
        `;
        membersDiv.appendChild(card);
    });
}

gridBtn.addEventListener("click", () => {
    membersDiv.classList.add("grid");
    membersDiv.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    membersDiv.classList.add("list");
    membersDiv.classList.remove("grid");
});

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

getMembers();