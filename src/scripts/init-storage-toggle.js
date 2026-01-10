export const initStorageToggle = (dataName, datasetName, storageKey) => {
  const catalogContainer = document.querySelector('[data-catalog-list]')
  if (!catalogContainer) return

  let productItems = JSON.parse(localStorage.getItem(storageKey)) || []

  catalogContainer.addEventListener('click', (event) => {
    const button = event.target.closest(`[${dataName}]`)
    if (!button) return

    const id = Number(button.dataset[datasetName])
    const isActive = !productItems.includes(id)

    if (isActive) {
      productItems.push(id)
    } else {
      productItems = productItems.filter(item => item !== id)
    }

    button.classList.toggle('is-active', isActive)
    localStorage.setItem(storageKey, JSON.stringify(productItems))
  })
}
