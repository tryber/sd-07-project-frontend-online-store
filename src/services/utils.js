localStorage.setItem('products', JSON.stringify([]));

export const updateLocalStorate = (data) => {
  let products = JSON.parse(localStorage.getItem('products'));
  products = [...products, data];
  localStorage.setItem('products', JSON.stringify(products));
};

export const getFromLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem('products'));
  return products;
};
