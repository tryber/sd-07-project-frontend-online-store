function updateCartTotal() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  if (cart !== null) {
    const INITIAL_ACC = 0;
    return cart.reduce((acum, { quantity }) => acum + quantity, INITIAL_ACC);
  }
  const empty = 0;
  return empty;
}

export default updateCartTotal;
