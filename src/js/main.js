/*============== Show Menu ==============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav)
        toggle.addEventListener('click', () => nav.classList.toggle('show-menu'))
}

showMenu('nav-toggle', 'nav-menu')

/*============== Remove Menu Mobile ==============*/
const navLink = document.querySelectorAll('.nav__link')

function linkActive() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkActive))

/*============== Scroll Sections Active Link ==============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionsHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionsHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*============== Change Background Header ==============*/
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*============== Show Scroll Top ==============*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*============== Dark Light Theme ==============*/
const themeButton = document.getElementById('theme-button'),
    darkTheme = 'dark-theme',
    iconTheme = 'bx-toggle-right';

const selectedTheme = localStorage.getItem('selected-theme'),
    selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>  themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*============== Scroll Reveal Animation ==============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.home__data, .home__img,
.decoration__data,
.accessory__content,
.footer__content`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.share__img, .send__content`, {
    origin: 'left'
})

sr.reveal(`.share__data, .send__img`, {
    origin: 'right'
})


















