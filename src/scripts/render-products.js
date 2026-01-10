import { createProductCard } from './create-product-card'
import { createCartCard } from './create-cart-card'

export const renderProducts = (container, productsList, templateCard = 'product') => {
  container.innerHTML = ''
  const fragment = document.createDocumentFragment()

  switch (templateCard) {
    case 'cart':
      productsList.forEach(product => fragment.append(createCartCard(product)))
      break
    case 'product':
      productsList.forEach(product => fragment.append(createProductCard(product)))
      break
    default:
      break
  }

  container.append(fragment)
}
