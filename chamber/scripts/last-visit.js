const msToDays = 86400000;
const theDateToday = Date.now();

let lastVisit = localStorage.getItem('lastVisitedDate') || false;

// need to simulate older dates by subtracting msToDays

if (lastVisit){
    const todayElement = document.getElementById('today');
    todayElement.textContent = theDateToday;
    console.log(theDateToday);

    const lastVisitElement = document.getElementById('last-visit');
    lastVisitElement.textContent = lastVisit;

    const diffElement = document.getElementById('days-since-last-visit');
    diffElement.textContent = `${Math.floor((theDateToday - lastVisit) / msToDays)} days since last visit`;
} else {
    localStorage.lastVisitedDate = theDateToday
}

