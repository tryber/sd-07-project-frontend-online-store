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

export const readCart = () => JSON.parse(localStorage.getItem('cart'));

export const saveCart = (cart) => { localStorage.setItem('cart', JSON.stringify(cart))};

export const addToCart = (product) => {
  let cart = readCart();
  if (!cart) cart = [];
  const item = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
    amount: 1,
  };
  let unique = false;
  cart.forEach((element) => {
    if (item.id === element.id) {
      element.amount += 1;
      unique = true;
    }
  });

  if (!unique) cart.push(item);
  saveCart(cart);
};
