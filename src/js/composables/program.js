function programAccord() {
  const accordBlocks = document.querySelectorAll('.program__block')
  const button = document.querySelector('.program__element-button')

  if (!accordBlocks.length) return

  accordBlocks.forEach(block => {
    block.addEventListener('click', () => {
      const parentItem = block.closest('.program__item')
      const info = parentItem.querySelector('.program__info')
      const isActive = parentItem.classList.contains('active')

      document.querySelectorAll('.program__item.active').forEach(openItem => {
        if (openItem !== parentItem) {
          openItem.classList.remove('active')
          const openInfo = openItem.querySelector('.program__info')
          openInfo.style.maxHeight = null
        }
      })

      if (!isActive) {
        parentItem.classList.add('active')
        info.style.maxHeight = info.scrollHeight + 'px'
        button.textContent = 'Більше'
      } else {
        parentItem.classList.remove('active')
        info.style.maxHeight = null
      }
    })
  })
}

export default programAccord
