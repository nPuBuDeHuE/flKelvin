const navButton = document.getElementById('nav-button');
const navMenu = document.getElementById('nav');
const buttonImage = document.getElementById('nav-button-image');

navButton.addEventListener('click', () =>{
    if (navMenu.classList.toggle('open')){
        //блок кода выполняется если класс был добавлен
        buttonImage.src = 'img/icons/nav_close.svg';
    } else {
        //блок кода выполняется если класс был удален
        buttonImage.src = 'img/icons/nav_open.svg';
    }
});

AOS.init({
    /* disable: mobile, - отключение анимация на мобильных устройствах */
    /* once: true - анимация только при загрузке */
});