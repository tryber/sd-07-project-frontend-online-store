export async function getCategories() {
  // const myObj = { method: 'GET' };
  const myFetch = fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((resolve) => resolve.json());
  return myFetch;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // const myObj = { method: 'GET' };
  const myFetch = fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((resolve) => resolve.json());
  return myFetch;
}

export async function getProductsFromQuery(query) {
  // const myObj = { method: 'GET' };
  const myFetch = fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((resolve) => resolve.json());
  return myFetch;
}
