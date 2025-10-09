function footer() {
  const footerContents = document.querySelectorAll('.footer__content')

  footerContents.forEach(content => {
    content.addEventListener('click', () => {
      const footerInfo = content.closest('.footer__info')
      const footerList = footerInfo.querySelector('.footer__list')

      // Переключаем активный класс
      footerInfo.classList.toggle('active')

      if (footerInfo.classList.contains('active')) {
        // Открываем: устанавливаем точную высоту
        footerList.style.maxHeight = footerList.scrollHeight + 'px'
      } else {
        // Закрываем: сбрасываем высоту
        footerList.style.maxHeight = '0'
      }
    })
  })
}

export default footer
