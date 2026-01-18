export const syncToggleButtons = (containerEl) => {
  let favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || []
  let cartList = JSON.parse(localStorage.getItem('cartList')) || []

  containerEl.querySelectorAll('[data-add-favorite]').forEach(button => {
    const id = Number(button.dataset.id)
    button.classList.toggle('is-active', favoriteList.includes(id))
  })

  containerEl.querySelectorAll('[data-add-cart]').forEach(button => {
    const id = Number(button.dataset.id)
    button.classList.toggle('is-active', cartList.includes(id))
  })
}
