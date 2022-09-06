const menuButton = document.querySelector(".header__btn")

const menu = document.querySelector(".menu__lateral")

menuButton.addEventListener('click', () =>{
  menu.classList.toggle("menu__lateral--active")
})