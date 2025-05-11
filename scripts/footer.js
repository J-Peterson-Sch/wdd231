const copywriteText = document.querySelector("#currentyear");
const lastModifiedText = document.querySelector("#lastModified");

const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;

copywriteText.innerHTML = `&copy;${currentYear}<span > Jordan Peterson - Idaho 🏴󠁵󠁳󠁩󠁤󠁿</span>`;
lastModifiedText.innerHTML = `Last Modification: ${lastModifiedDate}`;