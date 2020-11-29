export function addToCart(newProduct) {
  localStorage.setItem('cart', JSON.stringify(newProduct));
}

export function getCart() {
  JSON.parse(localStorage.getItem('cart'));
}

export function emptyCard() {
  localStorage.clear();
}
