const info = new URLSearchParams(window.location.search);

document.querySelector('#thankyou').innerHTML = `
<p class="wide-bottom">Thank you ${info.get('name')} for submitting <span class="bold-text">${info.get('movieTitle')} (${info.get('movieYear')})</span> for our list.
After I've had a chance to review you submission I'll contacte you at <span class="bold-text">${info.get('email')}</span></p>
`;