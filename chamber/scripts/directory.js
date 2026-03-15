const membersDiv = document.querySelector('#members');
const gridBtn = document.querySelector('#gridBtn');
const listBtn = document.querySelector('#listBtn');

const url = 'data/members.json';

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
    membersDiv.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${member.name}</h2>
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.level}</p>
        `;
        membersDiv.appendChild(card);
    });
}

// Toggle grid/list view
gridBtn.addEventListener('click', () => membersDiv.className = 'grid');
listBtn.addEventListener('click', () => membersDiv.className = 'list');

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

getMembers();