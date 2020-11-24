// faz a chamada da API
const makeRequest = (url) => fetch(url).then((response) => response.json());

export async function getCategories() {
  // Implemente aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const myReturn = makeRequest(url);
  await myReturn;
  return myReturn;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  if (query === undefined) {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}`;
    const myReturn = makeRequest(url);
    await myReturn;
    return myReturn;
  }

  const url = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}&q=$${query}`;
  const myReturn = makeRequest(url);
  await myReturn;
  return myReturn;
}
