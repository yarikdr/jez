function burger(burgerSel, menuSel, breakpoint) {
  const burger = document.querySelector(burgerSel),
        menu = document.querySelector(menuSel)
  burger.addEventListener('click', () => {
    if (parseInt(getComputedStyle(document.body).width) <= breakpoint) {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      document.body.classList.toggle('lock')
    }
  })
}

function watchScroll() {
  const header = document.querySelector('.header')
  window.addEventListener('scroll', () => {
    if (window.scrollY) {
      header.classList.add('header-moving')
    } else {
      header.classList.remove('header-moving')
    }
  })
}

window.addEventListener('DOMContentLoaded', () => {
  burger('.burger', '.menu', 768)
  watchScroll()
})