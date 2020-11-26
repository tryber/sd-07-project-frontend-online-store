export function initializeCart() {
  if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
}

export function getCartList() {
  return JSON.parse(localStorage.getItem('cart'));
}

export function addToCart(product) {
  const currentList = JSON.parse(localStorage.getItem('cart'));
  localStorage.setItem('cart', JSON.stringify([...currentList, product]));
}

export function removeFromCart(product) {
  const currentList = JSON.parse(localStorage.getItem('cart'));
  const newList = currentList.map(({ id }) => id !== product.id);
  localStorage.setItem('cart', JSON.stringify('cart', newList));
}
