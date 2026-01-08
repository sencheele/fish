import { loadJSON } from './load-json'
import { initShowMore } from './init-show-more'

export const initCatalog = async () => {
  const catalogContainer = document.querySelector('[data-catalog-list]')
  const showMore = document.querySelector('[data-show-more]')

  if (!catalogContainer || !showMore) return

  try {
    const productsList = await loadJSON('/src/data/products.json')
    initShowMore(productsList, catalogContainer, showMore)
  } catch (error) {
    console.error(error)
  }
}
