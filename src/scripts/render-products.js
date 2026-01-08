import { createProductCard } from './create-product-card'

export const renderProducts = (container, productsList) => {
  const fragment = document.createDocumentFragment()
  productsList.forEach(product => fragment.append(createProductCard(product)))
  container.append(fragment)
}
