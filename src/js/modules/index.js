import toggleBodyLock from './../helpers/toggleBodyLock'
import { html, firstScreen, header, burgerButton } from './../helpers/elementsNodeList'


// logger (Full Logging System) ==========================================================================
function FLS(message) {
  setTimeout(() => (window.FLS ? console.log(message) : null), 0)
}

// Проверка браузера на поддержку .webp изображений ======================================================
function isWebp() {
  // Проверка поддержки webp
  const testWebp = (callback) => {
    const webP = new Image()

    webP.onload = webP.onerror = () => callback(webP.height === 2)
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebp((support) => {
    const className = support ? 'webp' : 'no-webp'
    html.classList.add(className)

    FLS(support ? 'webp поддерживается' : 'webp не поддерживается')
  })
}

/* Проверка мобильного браузера */
const isMobile = {
  Android: () => navigator.userAgent.match(/Android/i),
  BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
  iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera: () => navigator.userAgent.match(/Opera Mini/i),
  Windows: () => navigator.userAgent.match(/IEMobile/i),
  any: () =>
    isMobile.Android() ||
    isMobile.BlackBerry() ||
    isMobile.iOS() ||
    isMobile.Opera() ||
    isMobile.Windows(),
}
/* Добавление класса touch для HTML если браузер мобильный */
function addTouchClass() {
  // Добавление класса _touch для HTML если браузер мобильный
  if (isMobile.any()) {
    html.classList.add('touch')
  }
}

// Добавление loaded для HTML после полной загрузки страницы
function addLoadedClass() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      html.classList.add('loaded')
    }, 0)
  })
}

// Получение хеша в адресе сайта
const getHash = () => {
  if (location.hash) {
    return location.hash.replace('#', '')
  }
}

// Указание хеша в адресе сайта
function setHash(hash) {
  hash = hash ? `#${hash}` : window.location.href.split('#')[0]
  history.pushState('', '', hash)
}

// Функция для фиксированной шапки при скролле ===========================================================
function headerFixed() {
  const headerStickyObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle('sticky', !entry.isIntersecting)
  })

  if (firstScreen) {
    headerStickyObserver.observe(firstScreen)
  }
}

// Универсальная функция для открытия и закрытия попапо ==================================================
const togglePopupWindows = () => {
  document.addEventListener('click', ({ target }) => {
    if (target.closest('[data-type]')) {
      const popup = document.querySelector(
        `[data-popup="${target.dataset.type}"]`
      )

      if (document.querySelector('._is-open')) {
        document.querySelectorAll('._is-open').forEach((modal) => {
          modal.classList.remove('_is-open')
        })
      }

      popup.classList.add('_is-open')
      toggleBodyLock(true)
    }

    if (target.classList.contains('_overlay-bg') || target.closest('.button-close')) {
      const popup = target.closest('._overlay-bg')

      popup.classList.remove('_is-open')
      toggleBodyLock(false)
    }
  })
}

// Модуль работы с меню (бургер) =========================================================================
const menuInit = () => {
  if (burgerButton) {
    document.addEventListener('click', ({ target }) => {
      if (target.closest('.icon-menu')) {
        html.classList.toggle('menu-open')
        toggleBodyLock(html.classList.contains('menu-open'))
      }
    })
  }
}
const menuOpen = () => {
  toggleBodyLock(true)
  html.classList.add('menu-open')
}
const menuClose = () => {
  toggleBodyLock(false)
  html.classList.remove('menu-open')
}

// свайпер

import Swiper, { Navigation, Pagination, Autoplay  } from 'swiper'

let menu = ['<div class="services__pagination-block"> <img src="../images/services-pagination__first-item.svg"> <p class="services__pagination-title">Complex design-project</p></div>',
             '<div class="services__pagination-block"> <img src="../images/services-pagination__second-item.svg"> <p class="services__pagination-title">Planning solution</p></div>',
              '<div class="services__pagination-block"> <img src="../images/services-pagination__third-item.svg"> <p class="services__pagination-title">Author supervision</p></div>',
               '<div class="services__pagination-block"> <img src="../images/services-pagination__fourth-item.svg"> <p class="services__pagination-title">Repair and decoration</p></div>',
                '<div class="services__pagination-block"> <img src="../images/services-pagination__fifth-item.svg"> <p class="services__pagination-title">Express-design</p></div>'
              ]
const swiper = new Swiper('.services-swiper', {
  loop: true,
  speed: 200,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    renderBullet: function(index, className) {
      return '<div class="' + className + '">' + (menu[index]) + '</div>'
    }
  },
  navigation: {
    el: '.swiper-navigation'
  },
  modules: [Pagination, Autoplay]
})


const projectsSwiper = new Swiper('.projects__swiper', {
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  slidesPerView: 1,
  modules: [Pagination, Autoplay]
})


const projectsPaginationTitles = document.querySelectorAll('.projects__progressbar-navigation_item')

document.querySelector('.projects__progressbar-navigation_item').classList.add('active')
projectsSwiper.on('slideChange', () => {
  projectsPaginationTitles.forEach(function(span) {
    span.classList.remove('active')
  })
  let activeSpanIndex = projectsSwiper.realIndex
  projectsPaginationTitles[activeSpanIndex].classList.add('active')
})

const activitesMobileSwiper = new Swiper('.activities__mobile_swiper', {
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  modules: [Pagination, Autoplay]
})

const activitiesMobileSwiperTitle = document.querySelectorAll('.activities__mobile_swiper-pagination_title_item')
document.querySelector('.activities__mobile_swiper-pagination_title_item').classList.add('active')
activitesMobileSwiper.on('slideChange', () => {
  activitiesMobileSwiperTitle.forEach(function(span)  {
    span.classList.remove('active')
  })
  let activeSpanIndex = activitesMobileSwiper.realIndex
  activitiesMobileSwiperTitle[activeSpanIndex].classList.add('active')
})

const stagesMobileSwiper = new Swiper('.activities__mobile_stages-swiper', {
  autoplay: {
    delay: 3000
  },
  loop: false,
  breakpoints: {
    375: {
      slidesPerView: 2
    },
    550: {
      slidesPerView: 3,
      slidesPerGroupAuto: 2
    },
  },
  modules: [Autoplay]
})


export {
  FLS,
  isWebp,
  isMobile,
  addTouchClass,
  headerFixed,
  togglePopupWindows,
  addLoadedClass,
  getHash,
  setHash,
  menuInit,
  menuOpen,
  menuClose,
}
