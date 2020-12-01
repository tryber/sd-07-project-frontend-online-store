
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

export const handleQuantity = ({ id, action }) => {
  const cartItems = getCartItems();
  const item = cartItems.find((cartItem) => cartItem.id === id[0]);
  let quantity = Number(item.quantity);
  if (action === 'increase') {
    quantity += 1;
    item.quantity = String(quantity);
  } else if (action === 'decrease') {
    quantity -= 1;
    item.quantity = String(quantity);
  }
  const newCartItemsList = cartItems.map((cartItem) => {
    const condition = cartItem === item ? item : cartItem;
    return condition;
  });
  saveCartItems(newCartItemsList);
};
