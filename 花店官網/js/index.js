const nav = document.querySelector('.nav')
const mask = document.querySelector('.webmask')

document.querySelector('.navbar-menu').addEventListener('click', () => {
    nav.style.top = 0
    mask.style.display = 'block'
})
document.querySelector('.nav-menu').addEventListener('click', () => {
    nav.style.top = '-450px'
    mask.style.display = 'none'
})
document.querySelector('.webmask').addEventListener('click', () => {
    nav.style.top = '-450px'
    mask.style.display = 'none'
})