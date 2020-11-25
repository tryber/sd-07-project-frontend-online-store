export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    const API = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}}`;
    const response = fetch(API)
      .then((r) => r.json());
    if (response.error) {
      throw new Error(`endpoint não existe ${response.error}`);
    }
    return response;
  }
  if (query) {
    const API = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = fetch(API)
      .then((r) => r.json());
    if (response.error) {
      throw new Error(`endpoint não existe ${response.error}`);
    }
    return response;
  }
  if (categoryId) {
    const API = `https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`;
    const response = fetch(API)
      .then((r) => r.json());
    if (response.error) {
      throw new Error(`endpoint não existe ${response.error}`);
    }
    return response;
  }
}
