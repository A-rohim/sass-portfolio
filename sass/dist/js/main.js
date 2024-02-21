const menuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn-burger')
const nav = document.querySelector('.nav')
const navMenu = document.querySelector('.nav-menu')
const navItem = document.querySelectorAll('.nav-menu-item')


let showMenu = false

menuBtn.addEventListener('click', toggleMneu)

function toggleMneu() {
    if (!showMenu) {
        hamburger.classList.add('open')
        nav.classList.add("open")
        navMenu.classList.add("open")
        navItem.forEach(item => item.classList.add('open'))
        showMenu = true;
    } else {
        hamburger.classList.remove('open')
        nav.classList.add("open")
        navMenu.classList.remove('open')
        navItem.forEach(item => item.classList.remove('open'))
        showMenu = false
    }
}