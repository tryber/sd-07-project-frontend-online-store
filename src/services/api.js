export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = await fetch(endpoint);
  const response = request.json();
  console.log(response);
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  console.log(endpoint);
  const request = await fetch(endpoint);
  const response = await request.json();
  console.log(response);
  return response;
}
