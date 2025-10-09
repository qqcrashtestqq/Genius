import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
Swiper.use(Pagination)

function tariffsSlider() {
  const slider = document.querySelector('.tariffs__swiper')
  const pagination = document.querySelector('.tariffs__pagination')
  const breakpoints = {
    0: {
      slidesPerView: 'auto'
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 3
    }
  }

  if (!slider) return

  const swiper = new Swiper(slider, {
    loop: true,

    pagination: {
      el: pagination
    },
    breakpoints: breakpoints
  })
}

export default tariffsSlider
