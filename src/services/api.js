export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  console.log(endpoint);
  return fetch(endpoint)
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  return fetch(endpoint)
    .then((res) => res.json())
    .catch((error) => console.log(error));
}
