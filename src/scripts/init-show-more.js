import { renderProducts } from './render-products'

export const initShowMore = (allProductsList, container, showMore, step = 7) => {
  let displayedCount = 0

  const renderNextBatch = () => {
    const nextProductsList = allProductsList.slice(displayedCount, displayedCount + step)

    if (nextProductsList.length === 0) return

    renderProducts(container, nextProductsList)
    displayedCount += nextProductsList.length

    if (displayedCount >= allProductsList.length) {
      showMore.removeEventListener('click', renderNextBatch)
      showMore.classList.add('is-hidden')
    }
  }

  showMore.addEventListener('click', renderNextBatch)

  renderNextBatch()
}
