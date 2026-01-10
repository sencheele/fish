export const getProductsById = (productsList, storageKey) => {
  const ids = JSON.parse(localStorage.getItem(storageKey)) || []
  
  return ids
    .map(id => productsList.find(item => item.id === Number(id)))
    .filter(Boolean)
}
