import { getDateString } from "./datetime.mjs";

const myInfo = new URLSearchParams(window.location.search);
const timestamp = myInfo.get('timestamp');
const date = getDateString(timestamp);

document.querySelector('#thankyou').innerHTML = `
<p>Thank you ${myInfo.get('firstName')} ${myInfo.get('lastName')} for filling out the form on behalf of ${myInfo.get('organization')} on ${date}.
We will be reaching out shortly to contact you at: ${myInfo.get('phone')} and ${myInfo.get('email')}</p>
`;