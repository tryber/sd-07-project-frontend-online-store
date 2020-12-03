export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categories = await fetch(endpoint)
    .then((response) => response.json());
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const categoryAndQuery = await fetch(endpoint)
    .then((response) => response.json());
  return categoryAndQuery;
}
