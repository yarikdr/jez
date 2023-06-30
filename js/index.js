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

function slider(swiper, prev, next, slideSel) {
  new Swiper(swiper, {
    navigation: {
      nextEl: next,
      prevEl: prev,
    },

    slidesPerView: 'auto',
    spaceBetween: 30,
    autoHeight: true,
    centeredSlides: true,
    breakpoint: {
      768: {
        centeredSlides: false,
      }
    }
  })

  function fraction(slideSel) {
    function getZero(num) {
      console.log(num)
      if (num < 10) return `0${num}`
      return num
    }

    let slideIndex = 1

    const current = document.querySelector('#currentSlide'),
          total = document.querySelector('#totalSlides'),
          numberOfSlides = document.querySelectorAll(slideSel).length,
          prev = document.querySelector('#prev'),
          next = document.querySelector('#next')

    total.textContent = getZero(numberOfSlides)
    current.textContent = getZero(slideIndex)

    function changeSlide(n) {
      if (n > numberOfSlides) {
        slideIndex = numberOfSlides
      } else if (n < 0) {
        slideIndex = 1
      }

      slideIndex = n
    }
    
    function plusSlide(n) {
      changeSlide(slideIndex += n)
      current.textContent = getZero(slideIndex)
    }

    prev.addEventListener('click', () => plusSlide(-1))
    next.addEventListener('click', () => plusSlide(1))
  }

  fraction(slideSel)
}

window.addEventListener('DOMContentLoaded', () => {
  burger('.burger', '.menu', 768)
  watchScroll()
  slider('.swiper', '#prev', '#next', '.swiper-slide')
})