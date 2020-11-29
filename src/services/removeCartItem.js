function removeCartItems(idRemoving) {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const newCart = cart.filter(({ id }) => id !== idRemoving);
  localStorage.setItem('cart', JSON.stringify(newCart));
}

export default removeCartItems;
