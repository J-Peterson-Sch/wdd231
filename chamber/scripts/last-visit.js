const msToDays = 86400000;
const theDateToday = Date.now();
const lastVisit = 1738660293454;

const todayElement = document.getElementById('today');
todayElement.textContent = theDateToday;
console.log(theDateToday);

const lastVisitElement = document.getElementById('last-visit');
lastVisitElement.textContent = lastVisit;

const diffElement = document.getElementById('days-since-last-visit');
diffElement.textContent = (theDateToday - lastVisit) / msToDays;