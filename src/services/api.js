
export async function getCategories() {
  const categoreis = fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((data) => data.json());
  return categoreis;
}
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((data) => data.json());
  return response;
}

export async function getProductsFromQuery(query) {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const object = result.json();
  return object;
}
