import { initStorageToggle } from "./init-storage-toggle"
import { renderProductsFromStorage } from "./render-products-from-storage"

export const initToggles = () => {
  const catalogListContainer = document.querySelector('[data-catalog-list]')
  const cartListContainer = document.querySelector('[data-cart-list]')
  const favoriteListContainer = document.querySelector('[data-favorite-list]')

  if (!catalogListContainer || !cartListContainer || !favoriteListContainer) return

  initStorageToggle(catalogListContainer, '[data-add-favorite]', 'favoriteList')
  initStorageToggle(catalogListContainer, '[data-add-cart]', 'cartList')
  initStorageToggle(favoriteListContainer, '[data-add-cart]', 'cartList')
  initStorageToggle(favoriteListContainer, '[data-add-favorite]', 'favoriteList', () => renderProductsFromStorage(favoriteListContainer, 'favoriteList'))
  initStorageToggle(cartListContainer, '[data-remove]', 'cartList', () => renderProductsFromStorage(cartListContainer, 'cartList', 'cart'))
}
