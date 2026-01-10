const createElement = (name, classNames = []) => {
  const element = document.createElement(name)

  if (classNames.length) {
    element.classList.add(...classNames)
  }

  return element
}

export const createCartCard = (product) => {
  const cardImage = createElement('div', ['cart-card__image'])

  const image = createElement('img')
  image.src = product.imageURL
  image.alt = product.name
  cardImage.append(image)

  const name = createElement('p', ['cart-card__name'])
  name.textContent = product.name

  const minus = createElement('button', ['cart-card__quantity-button', 'cart-card__quantity-button--minus'])
  minus.type = 'button'

  const value = createElement('p', ['cart-card__quantity-value'])
  value.textContent = '1,5 кг'

  const plus = createElement('button', ['cart-card__quantity-button', 'cart-card__quantity-button--plus'])
  plus.type = 'button'

  const quantity = createElement('div', ['cart-card__quantity'])
  quantity.append(minus, value, plus)

  const cost = createElement('div', ['cart-card__cost'])

  if (product.oldPrice) {
    const oldPrice = createElement('p', ['cart-card__old-price'])
    oldPrice.textContent = `${product.oldPrice} ₽`
    cost.append(oldPrice)
  }

  const price = createElement('p', ['cart-card__price'])
  price.textContent = `${product.price} ₽`

  cost.append(price)

  const group = createElement('div', ['cart-card__group'])
  group.append(quantity, cost)

  const deleteCart = createElement('button', ['cart-card__delete'])
  deleteCart.type = 'button'

  const content = createElement('div', ['cart-card__content'])
  content.append(name, group)

  const card = createElement('li', ['cart__item', 'cart-card'])
  card.append(cardImage, content, deleteCart)

  return card
}
