// faz a chamada da API
const makeRequest = (url) => fetch(url).then((response) => response.json());

export async function getCategories() {
  // Implemente aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const myReturn = makeRequest(url);
  await myReturn;
  return myReturn;
}

export async function getProductsFromCategoryAndQuery(ID, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe

  if (query === undefined) {
    if (ID.length > 8) {
      const url = `https://api.mercadolibre.com/items/${ID}`;
      const myReturn = makeRequest(url);
      await myReturn;
      return myReturn;
    }
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=$${ID}`;
    const myReturn = makeRequest(url);
    await myReturn;
    return myReturn;
  }

  if (ID === undefined) {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=$${query}`;
    const myReturn = makeRequest(url);
    await myReturn;
    return myReturn;
  }

  const url = `https://api.mercadolibre.com/sites/MLB/search?category=$${ID}&q=$${query}`;
  const myReturn = makeRequest(url);
  await myReturn;
  return myReturn;
}
