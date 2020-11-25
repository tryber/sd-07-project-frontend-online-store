export async function getCategories() {
  const myObj = { method: 'GET' };
  const myFetch = fetch('https://api.mercadolibre.com/sites/MLB/categories', myObj)
    .then((resolve) => resolve.json());
  return myFetch;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const myObj = { method: 'GET' };
  const myFetch = fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`, myObj)
    .then((resolve) => resolve.json())
  return myFetch;
}
