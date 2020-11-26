export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = 'https://api.mercadolibre.com/sites/MLB/search?';
  if (query && categoryId) {
    url += `category=${categoryId}&q=${query}`;
  } else if (query) {
    url += `q=${query}`;
  } else {
    url += `category=${categoryId}`;
  }
  return fetch(url)
    .then((response) => response.json());
}

localStorage.setItem('cart', JSON.stringify({}));

const readCart = () => JSON.parse(localStorage.getItem('cart'));

const saveCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart));

export const addToCartFromDetails = (product, evaluation, feedback) => {
  let cart = readCart();
  
  if (feedback) {

  }
}

