/**
 * Start
 */
window.addEventListener('load', main);

/**
 * Position for scroll-Y
 */
let previousPosition = 0;

/**
 * Hold all functions
 */
function main() {
    eventListeners();
}

/**
 * Holds alla event listeners
 */
function eventListeners() {
    window.addEventListener('scroll', toggleMenu);
    window.addEventListener('scroll', parallaxScrollingHeader);
}

/**
 * Show menu on scroll up, hide on scroll down
 */
function toggleMenu() {
    const menu = document.getElementById('menu');

    if (previousPosition > window.scrollY) {
        menu.style.top = "0"
    } else {
        menu.style.top = "-3.5rem"
    }

    previousPosition = window.scrollY;
}

/**
 * Moves header images on scroll, parallax scrolling
 */
function parallaxScrollingHeader() {
    const headerMountains = document.getElementById('header-layer-2');
    const headerGothenburg = document.getElementById('header-layer-3');

    let value = window.scrollY;

    headerMountains.style.top = value * .05 + 'rem';
    headerGothenburg.style.top = value * .02 + 'rem'; 
}



