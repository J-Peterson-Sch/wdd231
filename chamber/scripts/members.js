'use strict';

function checkViewportWidth() {
    return window.innerWidth;
}

async function loadMembers() {
    const response = await fetch('data/members.json');
    return await response.json();
}

function createMemberCard(member) {
    const card = document.createElement('div');
    card.classList.add('member-card');

    const companyName = document.createElement('h2');
    companyName.textContent = member.name;

    const tagline = document.createElement('p');
    tagline.textContent = member.tagline;
    tagline.classList.add('slogan');

    const cardData = document.createElement('div');
    cardData.classList.add('card-data');
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

    const companyContact = document.createElement('div');
    companyContact.classList.add('company-contact');

    companyContact.appendChild(address);
    companyContact.appendChild(phoneNumber);
    companyContact.appendChild(url);
    cardData.appendChild(companyContact);

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

function createMemberListRow(member, viewport) {
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

    if (viewport >= sloganMinWidth) {
        row.appendChild(tagline);
    }
    
    row.appendChild(address);
    row.appendChild(phoneNumber);

    return row;
}

async function displayMemberTable(viewport) {
    
    try {
        const membersList = await loadMembers();

        const tableDiv = document.getElementById('directory-table');
        const table = document.createElement('table');
        tableDiv.innerHTML = '';
        const tableHead = document.createElement('thead');

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

        if (viewport >= sloganMinWidth) {
            tableHeader.appendChild(tagline);
        }

        tableHeader.appendChild(address);
        tableHeader.appendChild(phoneNumber);
        tableHead.appendChild(tableHeader);
        table.appendChild(tableHead);

        const body = document.createElement('tbody');

        // Generate and display table rows
        membersList.forEach(member => {
            const row = createMemberListRow(member, viewport);
            body.appendChild(row);
        });
        table.appendChild(body);
        tableDiv.appendChild(table);
    } 
    catch (error) {
        console.error("An error occurred while displaying members table:", error);
    }
}

// displayMemberCards();
// displayMemberTable();
let viewport = checkViewportWidth();
const sloganMinWidth = 550;
const gridButton = document.getElementById('grid-view');
const tableButton = document.getElementById('table-view');
const gridDiv = document.querySelector('#directory-grid');
const tableDiv = document.querySelector('#directory-table');

window.addEventListener('resize', function () {
    console.log('Window was resized')
    viewport = checkViewportWidth();

    const activeView = document.querySelector('.active-view');
    if (activeView.id === 'grid-view') {
        displayMemberCards();
    } else if (activeView.id === 'table-view') {
        displayMemberTable(viewport);
    } else {
        console.log('There was an error deciding between grid and table view');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    viewport = checkViewportWidth();

    const activeView = document.querySelector('.active-view');
    if (activeView.id === 'grid-view') {
        displayMemberCards();
    } else if (activeView.id === 'table-view') {
        displayMemberTable(viewport);
    } else {
        console.log('There was an error deciding between grid and table view');
    }
});

gridButton.addEventListener ('click', function () {
    if (!gridButton.classList.contains('active-view')) {
        gridButton.classList.toggle('active-view');
        tableButton.classList.toggle('active-view');
        gridDiv.classList.toggle('not-visible');
        tableDiv.classList.toggle('not-visible');
        displayMemberCards();
    }
});

tableButton.addEventListener ('click', function () {
    if (!tableButton.classList.contains('active-view')) {
        tableButton.classList.toggle('active-view');
        gridButton.classList.toggle('active-view');
        viewport = checkViewportWidth();
        tableDiv.classList.toggle('not-visible');
        gridDiv.classList.toggle('not-visible');
        displayMemberTable(viewport);
    }
});