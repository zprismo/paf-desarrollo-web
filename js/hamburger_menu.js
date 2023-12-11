document.addEventListener('DOMContentLoaded', function () {
    let menuBtn = document.getElementById('btn-menu');
    let navBar = document.querySelector('.menu');

    menuBtn.onclick = function () {
        navBar.classList.toggle('active');
    };
});