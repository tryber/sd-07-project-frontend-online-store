export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const responseFetch = await fetch(URL);
  const responseJson = await responseFetch.json();
  return responseJson;
}

// export async function getProductsFromCategoryAndQuery(categoryId, query) {
//   const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
//   const responseFetch = await fetch(URL);
//   const responseJson = await responseFetch.json();
//   return responseJson;
// }
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let URL;
  if (categoryId && query) {
    URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  } else if (categoryId) {
    URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else {
    URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }
  const responseFetch = await fetch(URL);
  const responseJson = await responseFetch.json();
  return responseJson;
}
export async function getProductById(id) {
  const URL = `https://api.mercadolibre.com/items/${id}`;
  const responseFetch = await fetch(URL);
  const responseJson = await responseFetch.json();
  return responseJson;
}
