function headerMenu() {
  const burgerButton = document.querySelector('.header__burger')
  const hederMenu = document.querySelector('.header__nav')

  if (!burgerButton || !hederMenu) return

  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active')
    hederMenu.classList.toggle('active')
  })
}

export default headerMenu
