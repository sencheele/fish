import {Modals} from './modals';
import { renderProductsFromStorage } from '../../../scripts/render-products-from-storage';

let modals;

const favoriteListContainer = document.querySelector('[data-favorite-list]')
const cartListContainer = document.querySelector('[data-cart-list]')

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    resetScrollPos: false,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  },
  'favorites': {
    openCallback: () => renderProductsFromStorage(favoriteListContainer, 'favoriteList'),
  },
  'cart': {
    openCallback: () => renderProductsFromStorage(cartListContainer, 'cartList', 'cart'),
  },
  // modal-1, modal-6 добавлен исключительно для примера при добавлении на проект ключ и обект записанный в нём нужно удалить
  // 'modal-1': {
  //   openCallback: () => console.log('Я отработаю при открытии modal-1'),
  //   closeCallback: () => console.log('Я отработаю при закрытии modal-1'),
  // },
};

const initModals = () => {
  const modalElements = document.querySelectorAll('.modal');
  if (modalElements.length) {
    modalElements.forEach((el) => {
      setTimeout(() => {
        el.classList.remove('modal--preload');
      }, 100);
    });
  }

  modals = new Modals(settings);
};

export {modals, initModals};
