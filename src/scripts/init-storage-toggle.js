export const initStorageToggle = (containerEl, buttonSelector, storageKey, onChange) => {
  containerEl.addEventListener('click', (e) => {
    const button = e.target.closest(buttonSelector)
    if (!button) return

    let productItems = JSON.parse(localStorage.getItem(storageKey)) || []

    const id = Number(button.dataset.id)
    const isAdded = !productItems.includes(id)

    if (isAdded) {
      productItems.push(id)
    } else {
      productItems = productItems.filter(item => item !== id)
    }

    // button.classList.toggle('is-active', isActive)
    localStorage.setItem(storageKey, JSON.stringify(productItems))

    if (onChange) {
      onChange()
    }
  })
}
