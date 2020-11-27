export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = await fetch(endpoint);
  const response = request.json();
  console.log(response);
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '', offset = 0) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}&offset=${offset}`;
  const request = await fetch(endpoint);
  const response = request.json();
  return response;
}
