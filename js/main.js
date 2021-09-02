/*==================== SHOW MENU ================*/
const showMenu = (toggleID, navID) =>{
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID);

    // Validar las variables existentes

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show__menu');
        })
    }
}

showMenu('nav-toggle','nav-menu');

/*==================== REMOVE MENU MOBILE ================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // Cuando demos click en cualquier .nav__link removeremos el show-menu class.

    navMenu.classList.remove('show__menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCOLL SECTIONS ACTIVE LINK ==============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link')}
        
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link')}
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== CHANGE BACKGROUND HEADER ==============*/

function scrollHeader(){
    const nav = document.getElementById('header')
    //Cuando el scroll esté a 200 del alto del viewport, agregar la clase scroll-header a la etiqueta header

    if(this.scrollY >= 200) nav.classList.add('scroll__header'); else nav.classList.remove('scroll__header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLLTOP ==============*/

function scrollTop(){
    const scrollTop = document.getElementById('scroll__top');
    // Cuando el scroll sea mayor a 560 del alto del viewport, agregar la clase show__scroll a la etiqueta scroll-top
    if(this.scrollY >= 560) scrollTop.classList.add('show__scroll');else scrollTop.classList.remove('show__scroll')
}

window.addEventListener('scroll', scrollTop)

/*========== SCROLL REVEAL ==========*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.home__img, .home__data, .combo__data, .accesorio__contenido, .footer__content`, {
    origin: 'top',
    interval: 200
})

sr.reveal(`.informacion__img, .send__content`, {
    origin: 'left'
})

sr.reveal(`.informacion__data, .send__img`, {
    origin: 'right'
})