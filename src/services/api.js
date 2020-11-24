
export async function getCategories() {
  const response = fetch('https://api.mercadolibre.com/sites/MLB/categories')
  .then(data => data.json());
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
  .then(data => data.json());
  return response;
}
