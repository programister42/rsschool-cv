"use strict";

const menuButton = document.querySelector('.mini-header')
const menu = document.querySelector('.burger-menu')

if (menuButton) {
  menuButton.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    menuButton.classList.toggle('_active')
    menu.classList.toggle('_active')
  })
}

const menuLinks = document.querySelectorAll('.menu-link')

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    if (menuButton.classList.contains('_active')) {
      document.body.classList.remove('_lock')
      menuButton.classList.remove('_active')
      menu.classList.remove('_active')
    }
  }
}
