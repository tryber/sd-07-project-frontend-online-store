export async function getCategories() {
  const requestAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestJson = await requestAPI.json();
  return requestJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    const requestAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
    const requestJson = await requestAPI.json();
    return requestJson;
  }

  if (categoryId && !query) {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const requestJson = await request.json();
    return requestJson;
  }

  if (!categoryId && query) {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const requestJson = await request.json();
    return requestJson;
  }
}
