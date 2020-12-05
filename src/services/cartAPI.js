localStorage.setItem('cart', JSON.stringify({}));

const readCart = () => JSON.parse(localStorage.getItem('cart'));

const saveCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart));

export const getCart = () => {
  const cart = readCart();
  return cart;
};

export const addItem = (newItem) => {
  let cart = readCart();
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

export const returnPrice = () => {
  let cart = readCart();
  const sum = Object.values(cart)
    .map((id) => id.info.price * id.quantidade)
    .reduce((a, b) => a + b);
  return sum;

export const increaseItem = (id) => {
  const cart = readCart();
  id.quantidade += 1;
  saveCart(cart);
};
