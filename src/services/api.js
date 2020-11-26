export async function getCategories() {
  // Implemente aqui
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const responseFetch = await fetch(URL);
  const responseJson = await responseFetch.json();
  return responseJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let URL = '';
  if (categoryId && query) URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  else if (!query) URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  else URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

  const responseFetch = await fetch(URL);
  const responseJson = await responseFetch.json();
  return responseJson;
}
