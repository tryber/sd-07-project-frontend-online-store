export async function getCategories() {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/categories`;
  const request = await fetch(endpoint);
  const response = request.json();
  return response;
  
}

export async function getProductsFromCategoryAndQuery( categoryId = '', query = '') {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`
  const request = await fetch(endpoint);
  const response = request.json();
  return response;
}
