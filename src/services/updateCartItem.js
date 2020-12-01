function updateCartItems({
  id: idNewItem,
  quantity: newQuantity,
}) {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const itemIndex = cart.findIndex(({ id }) => id === idNewItem);
  const {
    title,
    thumbnail,
    price,
    category,
    searchKey,
  } = cart[itemIndex];
  cart[itemIndex] = {
    id: idNewItem,
    quantity: newQuantity,
    title,
    thumbnail,
    price,
    category,
    searchKey,
  };
  localStorage.setItem('cart', JSON.stringify(cart));
}

export default updateCartItems;
