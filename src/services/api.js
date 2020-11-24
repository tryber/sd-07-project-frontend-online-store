export async function getCategories() {
  // Implemente aqui
  const requestAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestJson = await requestAPI.json();
  return requestJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const requestAPI = await fetch(endpoint);
  const requestJson = await requestAPI.json();
  return requestJson;
}
