/*
!(i) 
Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
Или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) код в итоговый файл не попадает.

Если мы хотим добавить модуль следует его расскоментировать
*/
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
import Swiper, { Navigation, Pagination, autoplay,  } from 'swiper'

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
  modules: [Navigation, Pagination]
})

const projectsSwiper = new Swiper('.projects__swiper', {
  loop: true,
  speed: 200,
})


// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = location.hostname === 'localhost'

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/
isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-type="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================
