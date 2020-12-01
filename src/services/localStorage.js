localStorage.setItem('products', JSON.stringify([]));

export const saveProductIntoShoppingCart = (itemCart) => {
  let products = JSON.parse(localStorage.getItem('products'));
  products = [...products, itemCart];
  localStorage.setItem('products', JSON.stringify(products));
};

export const picksUpItemsFromTheCartInLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem('products'));
  return products;
};;;