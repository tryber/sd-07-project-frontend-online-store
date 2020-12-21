export async function getCategories() {
  const requestAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return requestAPI.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && !query) {
    const requestAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    return requestAPI.json();
  }
  if (!categoryId && query) {
    const requestAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${query}`);
    return requestAPI.json();
  }
  if (categoryId && query) {
    const requestAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
    return requestAPI.json();
  }
}
