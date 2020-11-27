
const saveCartItems = (cartItems) => localStorage.setItem(
  'cartItems', JSON.stringify(cartItems),
);

export const getCartItems = () => JSON.parse(localStorage.getItem('cartItems'));

export const addCartItem = (newItem) => {
  let items = [];
  if (getCartItems() !== null) {
    items = getCartItems();
    items = [...items, newItem];
  } else {
    items.push(newItem);
  }
  saveCartItems(items);
};
