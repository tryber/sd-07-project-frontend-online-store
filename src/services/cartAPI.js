localStorage.setItem('items-cart', JSON.stringify([]));

export const readItemsOnCart = () => JSON.parse(localStorage.getItem('items-cart'));

export const addToCart = (newItem) => {
  const cartItems = readItemsOnCart();
  const newCart = [...cartItems, newItem];
  localStorage.setItem('items-cart', JSON.stringify(newCart));
};
