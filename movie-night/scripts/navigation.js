const hamButton = document.querySelector('#menu');
const modeButton = document.querySelector('#mode');
const navigation = document.querySelector('.nav-link-list');
const navContainer = document.querySelector('#nav-container')
const nav = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    navContainer.classList.toggle('open');
});

modeButton.addEventListener('click', () => {

});

function checkViewportWidth() {
    const viewportWidth = window.innerWidth;
}

window.addEventListener('resize', checkViewportWidth);

document.addEventListener('DOMContentLoaded', checkViewportWidth);
