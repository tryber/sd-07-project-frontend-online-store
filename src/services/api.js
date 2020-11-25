export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    const API = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}}`;
    const response = await fetch(API)
      .then((r) => r.json());
    if (response.error) {
      throw new Error(`endpoint não existe ${response.error}`);
    }
    return response;
  }
  if (query) {
    const API = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(API)
      .then((r) => r.json());
    if (response.error) {
      throw new Error(`endpoint não existe ${response.error}`);
    }
    return response;
  }
  if (categoryId) {
    const API = `https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`;
    const response = await fetch(API)
      .then((r) => r.json());
    if (response.error) {
      throw new Error(`endpoint não existe ${response.error}`);
    }
    return response;
  }
}
