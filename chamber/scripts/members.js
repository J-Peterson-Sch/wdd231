'use strict';

async function loadMembers() {
    const response = await fetch('data/members.json');
    return await response.json();
}

function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card';

    const companyName = document.createElement('h3');
    companyName.textContent = member.name;

    const tagline = document.createElement('p');
    tagline.textContent = member.tagline;

    const cardData = document.createElement('div');
    const address = document.createElement('p');
    const phoneNumber = document.createElement('p');
    const url = document.createElement('p');
    const logo = document.createElement('img');

    address.innerHTML = `<strong>ADDRESS:</strong> ${member.address}`;
    phoneNumber.innerHTML = `<strong>PHONE:</strong> ${member.phone}`;
    url.innerHTML = `<strong>URL:</strong> ${member.website}`;
    logo.src = `images/${member.image}`;
    logo.alt = `${member.name} logo`;
    logo.loading = "lazy";
    logo.classList.add('member-logo');

    cardData.appendChild(logo);
    cardData.appendChild(address);
    cardData.appendChild(phoneNumber);
    cardData.appendChild(url);

    card.appendChild(companyName);
    card.appendChild(tagline);
    card.appendChild(cardData);

    return card;
}

async function displayMemberCards() {
    
    try {
        const membersList = await loadMembers();

        const grid = document.getElementById('directory-grid');
        grid.innerHTML = '';

        // Generate and display member cards
        membersList.forEach(member => {
            const card = createMemberCard(member);
            grid.appendChild(card);
        });
    } 
    catch (error) {
        console.error("An error occurred while displaying member cards:", error);
    }
}

function createMemberListRow(member) {
    const row = document.createElement('tr');
    const companyName = document.createElement('td');
    companyName.textContent = member.name;
    companyName.innerHTML = `<a href="${member.website}">${member.name}</a>`;
    const tagline = document.createElement('td');
    tagline.textContent = member.tagline;
    const address = document.createElement('td');
    address.textContent = member.address;
    const phoneNumber = document.createElement('td');
    phoneNumber.textContent = member.phone;

    row.appendChild(companyName);
    row.appendChild(tagline);
    row.appendChild(address);
    row.appendChild(phoneNumber);

    return row;
}

async function displayMemberTable() {
    
    try {
        const membersList = await loadMembers();

        const table = document.getElementById('directory-table');
        table.innerHTML = '';

        const tableHeader = document.createElement('tr');
        const companyName = document.createElement('th');
        companyName.textContent = 'Company Name';

        const tagline = document.createElement('th');
        tagline.textContent = 'Slogan';
        const address = document.createElement('th');
        address.textContent = 'Address';
        const phoneNumber = document.createElement('th');
        phoneNumber.textContent = 'Phone Number';
        tableHeader.appendChild(companyName);
        tableHeader.appendChild(tagline);
        tableHeader.appendChild(address);
        tableHeader.appendChild(phoneNumber);
        table.appendChild(tableHeader);

        // Generate and display table rows
        membersList.forEach(member => {
            const row = createMemberListRow(member);
            table.appendChild(row);
        });
    } 
    catch (error) {
        console.error("An error occurred while displaying members table:", error);
    }
}

// displayMemberCards();
displayMemberTable();