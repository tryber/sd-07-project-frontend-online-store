export function recoveryProductsFromLocalStorage() {
  if (localStorage.getItem('shoppingCartItem') === null) {
    return localStorage.setItem('shoppingCartItem', '[]');
  }
  return JSON.parse(localStorage.getItem('shoppingCartItem'));
}

export function addProductInLocalStorage(productToAdd) {
  return localStorage.setItem('shoppingCartItem', JSON.stringify(productToAdd));
}

export function deleteProductFromLocalStorage(idThatYouSearch) {
  const previousList = recoveryProductsFromLocalStorage();
  const newList = previousList.filter((product) => product.id !== idThatYouSearch);
  const comparationParameter = 0;
  if (newList.length === comparationParameter) {
    return this.setItem('shoppingCartItem', '[]');
  }
  return addProductInLocalStorage(newList);
}

export function clearLocalStorage() {
  return localStorage.setItem('shoppingCartItem', '[]');
}

export function updateLocalStorage(productToAdd) {
  const oldList = recoveryProductsFromLocalStorage();
  const newList = [...oldList, productToAdd];
  return addProductInLocalStorage(newList);
}
