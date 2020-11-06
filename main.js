window.addEventListener('load', main);
let previousPosition = 0;

function main() {
    window.onscroll = toggleMenu;
}

/* Show menu on scroll up, hide on scroll down */
function toggleMenu() {
    const menu = document.getElementById('menu');

    if (previousPosition > window.scrollY) {
        menu.style.top = "0"
    } else {
        menu.style.top = "-3.5rem"
    }

    previousPosition = window.scrollY;
}
