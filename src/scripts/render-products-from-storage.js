import { loadJSON } from './load-json'
import { getProductsById } from './get-products-by-id'
import { renderProducts } from './render-products'

export const renderProductsFromStorage = async (containerSelector, storageKey, renderType) => {
  const container = document.querySelector(`[${containerSelector}]`)
  if (!container) return

  try {
    const productsList = await loadJSON('/src/data/products.json')
    renderProducts(container, getProductsById(productsList, storageKey), renderType)
  } catch (error) {
    console.error(error)
  }
}
