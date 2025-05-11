const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const nav = document.querySelector('nav');

hamButton.addEventListener('click', () => {
navigation.classList.toggle('open');
hamButton.classList.toggle('open');
nav.classList.toggle('not-visible');
});

function checkViewportWidth() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 700) {
        nav.classList.add('not-visible');
    }
    else {
        nav.classList.remove('not-visible');
    }
}

window.addEventListener('resize', checkViewportWidth);

document.addEventListener('DOMContentLoaded', checkViewportWidth);