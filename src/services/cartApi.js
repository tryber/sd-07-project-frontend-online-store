export function initializeCart() {
  if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
}

export function getCartList() {
  return JSON.parse(localStorage.getItem('cart'));
}

export function addToCart(product) {
  const newProduct = {
    ...product,
    cartQuantity: 1,
  };
  const currentList = JSON.parse(localStorage.getItem('cart'));

  if (currentList.find((item) => item.id === newProduct.id) !== undefined) {
    const newCart = currentList.map((currentItem) => {
      if (currentItem.id === newProduct.id) {
        currentItem.cartQuantity += 1;
      }
      return currentItem;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
  } else {
    localStorage.setItem('cart', JSON.stringify([...currentList, newProduct]));
  }
}

export function removeFromCart(product) {
  const currentList = JSON.parse(localStorage.getItem('cart'));
  const newList = currentList.map(({ id }) => id !== product.id);
  localStorage.setItem('cart', JSON.stringify('cart', newList));
}
