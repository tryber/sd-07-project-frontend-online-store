localStorage.setItem('cart', JSON.stringify({}));

const readCart = () => JSON.parse(localStorage.getItem('cart'));

const saveCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart));

export const getCart = () => {
  const cart = readCart();
  return cart;
};

export const addItem = (newItem) => {
  const cart = readCart();
  if (cart[newItem.id]) {
    cart[newItem.id].quantidade += 1;
  } else {
    cart[newItem.id] = {
      info: newItem,
      quantidade: 1,
    };
  }
  saveCart(cart);
};

export const returnItem = (id) => {
  const cart = readCart();
  const item = cart[id];
  return item;
};

export const returnPrice = () => {
  const cart = readCart();
  const sum = Object.values(cart)
    .map((id) => id.info.price * id.quantidade)
    .reduce((a, b) => a + b);
  return sum;
};

export const increaseItem = (id) => {
  const cart = readCart();
  cart[id].quantidade += 1;
  saveCart(cart);
};

export const decreaseItem = (id) => {
  const cart = readCart();
  cart[id].quantidade -= 1;
  saveCart(cart);
};
