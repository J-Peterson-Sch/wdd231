const msToDays = 86400000;
const theDateToday = Date.now();
const lastVisitMessage = document.getElementById('last-visit-message');

const lastVisit = localStorage.getItem('lastVisitedDate') || false;

// used to test other last visited dates
// lastVisit = new Date("2025-06-01");

function checkLastVisit () {
    if (lastVisit){
        const daysSinceLastVisit = Math.floor((theDateToday - lastVisit) / msToDays);
        if (daysSinceLastVisit >= 1) {
            lastVisitMessage.textContent = `You last visited ${Math.trunc(daysSinceLastVisit)} days ago.`;
        } else {
            lastVisitMessage.textContent = 'Back so soon! Awesome!';
        }
    } else {
        localStorage.lastVisitedDate = theDateToday
        lastVisitMessage.textContent = 'Welcome! Let us know if you have any questions.';
    }
}

checkLastVisit();