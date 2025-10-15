import useModal from './composables/useModal'
import footer from './composables/footer'
import headerMenu from './composables/header'
import tariffsSlider from './composables/tariffs'
import program from './composables/program'

window.addEventListener('DOMContentLoaded', () => {
  // Template for using modals
  const { bindModal } = useModal()
  footer()
  headerMenu()
  program()
  tariffsSlider()

  const modal = bindModal('test', true)
  const modal2 = bindModal('test2', true)
})

