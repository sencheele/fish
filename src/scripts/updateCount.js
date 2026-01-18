export const updateCount = () => {
  const favoriteCount = document.querySelector('[data-favorite-count]')
  const cartCount = document.querySelector('[data-cart-count]')

  if (!favoriteCount || !cartCount) return

  let favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || []
  let cartList = JSON.parse(localStorage.getItem('cartList')) || []

  favoriteCount.textContent = favoriteList.length
  cartCount.textContent = cartList.length
}
