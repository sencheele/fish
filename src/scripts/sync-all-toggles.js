import { syncToggleButtons } from './sync-toggle-buttons'

export const syncAllToggles = () => {
  const containers = [
    document.querySelector('[data-catalog-list]'),
    document.querySelector('[data-favorite-list]'),
    document.querySelector('[data-cart-list]'),
  ]

  containers.forEach(container => {
    if (container) {
      syncToggleButtons(container)
    }
  })
}
