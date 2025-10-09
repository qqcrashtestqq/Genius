import { disablePageScroll, enablePageScroll, addScrollableSelector } from 'scroll-lock'

/**
 * Hook for managing modal windows.
 * Allows opening, closing, and binding modals to triggers.
 *
 * @returns {Object} Methods for modal control:
 * - `openModal(modal: HTMLElement, modalName: string): void`
 * - `closeModal(modal: HTMLElement): void`
 * - `bindModal(modalName: string, missClick?: boolean): { openModal: Function, closeModal: Function }`
 */
function useModal() {
  const activeModals = []

  /**
   * Opens a modal window.
   *
   * @param {HTMLElement} modal - The modal element to open.
   * @param {string} modalName - The modal name (used for scrollable selector).
   * @returns {void}
   */
  function openModal(modal, modalName) {
    activeModals.push(modal)
    modal.classList.add('modal--open')
    modal.setAttribute('aria-hidden', 'false')
    disablePageScroll()
    addScrollableSelector(modalName)
  }

  /**
   * Closes a modal window with animation.
   *
   * @param {HTMLElement} modal - The modal element to close.
   * @returns {void}
   */
  function closeModal(modal) {
    modal.classList.add('modal--close')
    modal.classList.remove('modal--open')

    /**
     * Remove focus from the element that opened the modal.
     * For more details, see the aria-hidden section of the WAI-ARIA specification at https://w3c.github.io/aria/#aria-hidden.
     * */
    document.activeElement.blur()

    setTimeout(() => {
      modal.classList.remove('modal--close')
      modal.setAttribute('aria-hidden', 'true')
      activeModals.splice(activeModals.indexOf(modal), 1)

      enablePageScroll()
    }, 300)
  }

  /**
   * Binds modal to trigger buttons and close actions.
   *
   * @param {string} modalName - The modal name (from data attributes).
   * @param {boolean} [missClick=true] - Whether clicking outside modal content should close the modal.
   * @returns {Object} Control functions for the modal:
   * - `openModal`: function to manually open the modal
   * - `closeModal`: function to manually close the modal
   */
  function bindModal(modalName, missClick = true) {
    const trigger = document.querySelector(`[data-open-modal=${modalName}]`)
    const modal = document.querySelector(`[data-modal-name=${modalName}]`)
    const close = modal?.querySelectorAll('[data-modal-close]')

    if (!modal) {
      throw new Error(`Modal with name ${modalName} not found`)
    }

    if (trigger) {
      trigger.addEventListener('click', () => {
        if (modal.classList.contains('modal--open')) closeModal(modal)
        openModal(modal, modalName)
      })
    }

    if (close.length) {
      close.forEach(cl => {
        cl.addEventListener('click', () => {
          closeModal(modal)
        })
      })
    }

    if (modal) {
      if (missClick) {
        modal.addEventListener('click', ({ target }) => {
          if (!target.closest('.modal__content')) {
            closeModal(modal)
          }
        })
      }
    }

    return {
      openModal: () => openModal(modal, modalName),
      closeModal: () => closeModal(modal)
    }
  }

  // Close any open modal when Escape key is pressed
  document.addEventListener('keyup', ({ key }) => {
    if (key === 'Escape') {
      if (activeModals.length) {
        closeModal(activeModals[activeModals.length - 1])
      }
    }
  })

  return {
    openModal,
    closeModal,
    bindModal
  }
}

export default useModal
