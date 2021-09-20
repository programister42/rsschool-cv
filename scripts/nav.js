"use strict";

const menuButton = document.querySelector('.mini-header')
const menu = document.querySelector('.burger-menu')
if (menuButton) {
  menuButton.addEventListener("click", function () {
    document.body.classList.toggle('_lock')
    menuButton.classList.toggle('_active')
    menu.classList.toggle('_active')
  })
}

const navLinks = document.querySelectorAll('.menu-link[data-goto]')
if (navLinks.length > 0) {
  navLinks.forEach(navLink => {
    navLink.addEventListener("click", onNavLinkClick)
  })

  function onNavLinkClick(e) {
    const navLink = e.target

    if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
      const gotoBlock = document.querySelector(navLink.dataset.goto)
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      })

      e.preventDefault()

      navLinks.forEach(navLink => {
        if (navLink.parentElement.classList.contains('_selected')) {
          navLink.parentElement.classList.remove('_selected')
        }
      })
      navLink.parentElement.classList.toggle('_selected')

    }

    if (menuButton.classList.contains('_active')) {
      document.body.classList.remove('_lock')
      menuButton.classList.remove('_active')
      menu.classList.remove('_active')
    }
  }
}
