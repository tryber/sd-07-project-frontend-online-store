export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const convertJson = await result.json();

  return convertJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fullEndPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fullResponse = await fetch(fullEndPoint);
  const fullConvertJson = fullResponse.json();
  return fullConvertJson;
}
