'use strict';
import { locations } from "../data/locations.mjs";

const locationsDiv = document.querySelector("#all-locations");

function createLocationCard(location) {
    const card = document.createElement('div');
    card.classList.add('location-card');

    const locatonName = document.createElement('h2');
    locatonName.textContent = location.name;

    const figure = document.createElement('figure');

    const image = document.createElement('img');
    image.src = `images/locations/${location.file}`;
    image.alt = `Image of ${location.name}`;

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = `${location.name}, Elantris, Opelon, Sel`;

    const locationAddress = document.createElement('address');
    locationAddress.textContent = location.address;

    const description = document.createElement('p');
    description.textContent = location.description;

    card.appendChild(locatonName);
    figure.appendChild(image);
    figure.appendChild(figcaption);
    card.appendChild(figure);
    card.appendChild(locationAddress);
    card.appendChild(description);

    return card;
}

function displayLocationCards() {
    
    try {
        locations.forEach(location => {
            const card = createLocationCard(location);
            locationsDiv.appendChild(card);
        });
    } 
    catch (error) {
        console.error("An error occurred while displaying location cards:", error);
    }
}

displayLocationCards();