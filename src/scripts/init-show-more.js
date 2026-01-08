import { renderProducts } from './render-products'

export const initShowMore = (allProductsList, container, showMore, step = 7) => {
  const emptyCard = document.querySelector('[data-empty-card]')
  
  let displayedCount = 0

  const renderNextBatch = () => {
    const nextProductsList = allProductsList.slice(displayedCount, displayedCount + step)

    if (nextProductsList.length === 0) return

    renderProducts(container, nextProductsList)
    displayedCount += nextProductsList.length

    if (emptyCard) container.appendChild(emptyCard)

    if (displayedCount >= allProductsList.length) {
      showMore.removeEventListener('click', renderNextBatch)
      showMore.classList.add('is-hidden')

      if (emptyCard) emptyCard.classList.remove('is-hidden')
    }
  }

  showMore.addEventListener('click', renderNextBatch)

  renderNextBatch()
}
