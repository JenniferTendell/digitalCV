window.addEventListener('load', main);
let previousPosition = 0;

function main() {
    window.addEventListener('scroll', toggleMenu);
    moveHeaderImages();
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

/* Move header images on scroll */
function moveHeaderImages() {
    const headerMountains = document.getElementById('header-layer-2');
    const headerGothenburg = document.getElementById('header-layer-3');

    window.addEventListener('scroll', function() {
        let value = window.scrollY;

        headerMountains.style.top = value * .05 + 'rem';
        headerGothenburg.style.top = value * .02 + 'rem';      
    })  
}


