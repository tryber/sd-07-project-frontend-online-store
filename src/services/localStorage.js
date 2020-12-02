localStorage.setItem('products', JSON.stringify([]));

export const saveProductIntoShoppingCart = (itemCart) => {
  let cartItems = JSON.parse(localStorage.getItem('products'));
  cartItems = [...cartItems, itemCart];
  localStorage.setItem('products', JSON.stringify(cartItems));
};

export const picksUpItemsFromTheCartInLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem('products'));
  return products;
};
