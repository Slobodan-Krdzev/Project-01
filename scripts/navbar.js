let navBtnToggler = document.querySelector('#navToggler');
let icon = document.querySelector('.fa-bars');

navBtnToggler.addEventListener('click', changeBtn)

function changeBtn() {
    if (icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-x');
        colorChange();
    } else {
        icon.classList.replace('fa-x', 'fa-bars');
        returnColor();
    }

    function colorChange() {
        let nav = document.querySelector('.navbar');

        nav.classList.add('dark-background');

        let logo = document.querySelector('#logoName');
        logo.classList.remove('text-dark');
        logo.classList.add('text-light');

        let bars = document.querySelector('#navIcon');
        bars.classList.remove('text-dark');
        bars.classList.add('text-light');
    }

    function returnColor() {
        let nav = document.querySelector('.navbar');

        nav.classList.remove('dark-background');

        let logo = document.querySelector('#logoName');
        logo.classList.add('text-dark');
        logo.classList.remove('text-light');

        let bars = document.querySelector('#navIcon');
        bars.classList.add('text-dark');
        bars.classList.remove('text-light');
    }
}

