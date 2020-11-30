
const saveCartItems = (cartItems, totalQuantity) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
};

export const getCartItems = () => JSON.parse(localStorage.getItem('cartItems'));

export const addCartItem = (newItem, totalQuantity) => {
  let items = [];
  if (getCartItems() !== null) {
    items = getCartItems();
    items = [...items, newItem];
  } else {
    items.push(newItem);
  }
  saveCartItems(items, totalQuantity);
};
