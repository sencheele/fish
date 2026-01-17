const createElement = (name, classNames = []) => {
  const element = document.createElement(name)

  if (classNames.length) {
    element.classList.add(...classNames)
  }

  return element
}

export const createProductCard = (product) => {
  // Блок с изображением товара, плашкой "суперцена" и кнопкой добавления товара в избранное
  const productCardImage = createElement('div', ['product-card__image'])

  const image = createElement('img')
  image.src = product.imageURL
  image.alt = product.name
  productCardImage.append(image)

  if (product.oldPrice) {
    const badge = createElement('div', ['product-card__badge'])
    badge.textContent = 'Суперцена'
    productCardImage.append(badge)
  }

  const favorite = createElement('button', ['button', 'product-card__favorite'])
  favorite.type = 'button'
  favorite.innerHTML = '<svg><use href="/public/sprite.svg#icon-favorite"></use></svg>'
  favorite.dataset.addFavorite = ''
  favorite.dataset.id = product.id
  productCardImage.append(favorite)

  // Блок с названием товара и его описанием
  const info = createElement('div', ['product-card__info'])

  const name = createElement('h3', ['product-card__name'])
  name.textContent = product.name

  const descriptionParagraph = createElement('p')
  descriptionParagraph.textContent = product.description

  const description = createElement('div', ['product-card__description'])
  description.append(descriptionParagraph)

  info.append(name)
  info.append(description)

  // Блок с кнопкой добавления товара в корзину, ценой и наличием
  const bottom = createElement('div', ['product-card__bottom'])

  const buttonCart = createElement('button', ['button', 'product-card__button'])
  buttonCart.type = 'button'
  buttonCart.textContent = 'Купить'
  buttonCart.dataset.addCart = ''
  buttonCart.dataset.id = product.id

  const details = createElement('div', ['product-card__details'])

  if (product.oldPrice) {
    const oldPrice = createElement('p', ['product-card__old-price'])
    oldPrice.textContent = `${product.oldPrice} ₽ / кг`
    details.append(oldPrice)
  }

  const price = createElement('p', ['product-card__price'])
  price.textContent = `${product.price} ₽ / кг`

  const availability = createElement('p', ['product-card__availability'])
  availability.textContent = `В наличии ${product.availability} кг`

  details.append(price)
  details.append(availability)

  bottom.append(buttonCart)
  bottom.append(details)

  // Карточка товара
  const productCard = createElement('li', ['catalog__item', 'product-card'])
  productCard.append(productCardImage)
  productCard.append(info)
  productCard.append(bottom)

  return productCard
}
