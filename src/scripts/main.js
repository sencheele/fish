import '/src/assets/styles/style.scss'

import { initPhoneMask } from './init-phone-mask'
import { initCatalog } from './init-catalog'
import { initStorageToggle } from './init-storage-toggle'

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', async () => {
    initPhoneMask()
    initCatalog()
    initStorageToggle('data-add-favorite', 'addFavorite', 'favoriteList')
    initStorageToggle('data-add-cart', 'addCart', 'cartList')

    // Динамический импорт компонентов и библиотек

    // Аккордеон
    const accordionElement = document.querySelector('[data-accordion]')

    if (accordionElement) {
      const {initAccordions} = await import('../components/accordion/scripts/init-accordion')

      initAccordions()
    }

    // Табы
    const tabElement = document.querySelector('[data-tabs]')

    if (tabElement) {
      const {initTabs} = await import('../components/tabs/scripts/init-tabs')

      initTabs()
    }

    // Модальные окна
    const modalElement = document.querySelector('[data-open-modal]')

    if (modalElement) {
      const {initModals} = await import('../components/modals/scripts/init-modals')

      initModals()
    }

    // Свайпер
    const swiperElement = document.querySelector('.swiper')

    if (swiperElement) {
      const { default: Swiper } = await import('swiper/bundle')
      await import('swiper/css/bundle')

      const modules = import.meta.glob('./swipers/init-swiper*.js')

      for (const path in modules) {
        const module = await modules[path]()

        if (module.initSwiper) {
          module.initSwiper()
        }
      }
    }
  })
})
