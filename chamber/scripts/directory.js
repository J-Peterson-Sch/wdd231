'use strict';
import { displayMemberCards, displayMemberTable } from "./members.mjs";

// displayMemberCards();
// displayMemberTable();
let viewport = checkViewportWidth();
const sloganMinWidth = 550;
const gridButton = document.getElementById('grid-view');
const tableButton = document.getElementById('table-view');
const gridDiv = document.querySelector('#directory-grid');
const tableDiv = document.querySelector('#directory-table');


function checkViewportWidth() {
    return window.innerWidth;
}

window.addEventListener('resize', function () {
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
        displayMemberTable(viewport, sloganMinWidth);
    }
});