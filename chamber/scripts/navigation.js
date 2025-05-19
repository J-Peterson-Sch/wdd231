const hamButton = document.querySelector('#menu');
const modeButton = document.querySelector('#mode');
const navigation = document.querySelector('.nav-link-list');
const navContainer = document.querySelector('#nav-container')
const nav = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    navContainer.classList.toggle('open');
    // if (window.innerWidth < 700) {
    //     nav.classList.toggle('not-visible');
    // } else {
    //     nav.classList.remove('not-visible');
    // }
});

modeButton.addEventListener('click', () => {

});

function checkViewportWidth() {
    const viewportWidth = window.innerWidth;
    // if (viewportWidth < 700) {
    //     nav.classList.add('not-visible');
    // }
    // else {
    //     nav.classList.remove('not-visible');
    // }
}

window.addEventListener('resize', checkViewportWidth);

document.addEventListener('DOMContentLoaded', checkViewportWidth);
