export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let API = '';
  switch (true) {
  case (categoryId !== '' && query !== ''):
    API = `https://api.mercadolibre.com/sites/MLB/search?q=${query}&category=${categoryId}`;
    break;
  case (query !== ''):
    API = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    break;
  default:
    API = `https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`;
    break;
  }
  
  const response = await fetch(API)
    .then((r) => r.json());
  if (response.error) {
    throw new Error(`endpoint não existe ${response.error}`);
  }
  return response;
}
