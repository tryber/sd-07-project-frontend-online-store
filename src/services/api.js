export async function getCategories() {
  const endpointCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const responseURL = await fetch(endpointCategories);
    const objectCategories = await responseURL.json();
    return objectCategories;
  } catch (Error) {
    console.log(Error);
  }
}

export async function getProductsFromCategoryAndQuery(query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  try {
    const responseURL = await fetch(endpoint);
    const objectAPI = await responseURL.json();
    return objectAPI;
  } catch (Error) {
    console.log(Error);
  }
}
