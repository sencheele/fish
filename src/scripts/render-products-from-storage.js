import { loadJSON } from './load-json'
import { getProductsById } from './get-products-by-id'
import { renderProducts } from './render-products'

export const renderProductsFromStorage = async (containerEl, storageKey, renderType) => {
  try {
    const productsList = await loadJSON('/src/data/products.json')
    renderProducts(containerEl, getProductsById(productsList, storageKey), renderType)
  } catch (error) {
    console.error(error)
  }
}
