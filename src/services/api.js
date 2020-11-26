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

if (!localStorage['cart']) {
  localStorage.setItem('cart', JSON.stringify({}));
}

export const readCart = () => JSON.parse(localStorage.getItem('cart'));

export const saveCart = (cart) => { localStorage.setItem('cart', JSON.stringify(cart))};

export const addToCart = (product) => {
  let cart = readCart();
  if (cart[product.id]){
    cart[product.id].qtd += 1;
  } else {
    cart[product.id] = { 
      qtd: product.qtd = 1,
      thumbnail: product.thumbnail,
      title: product.title,
      price: product.price,
      id: product.id,
    }
  }
  saveCart(cart);
}