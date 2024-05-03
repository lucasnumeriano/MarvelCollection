const bOpenMenu = document.querySelector('#button-open-menu');
const bCloseMenu = document.querySelector('#button-close-menu');

const nList = document.querySelector('.navlist');

const bodyElement = document.body;

bOpenMenu.addEventListener('click', () => {
    if (nList.classList.contains('off')) {
        nList.classList.remove('off');
        bOpenMenu.classList.add('off');
        bCloseMenu.classList.remove('off');
        bodyElement.classList.add('no-scroll');
    }
});

bCloseMenu.addEventListener('click', () => {
        nList.classList.add('off');
        bOpenMenu.classList.remove('off');
        bCloseMenu.classList.add('off');
        bodyElement.classList.remove('no-scroll');
});