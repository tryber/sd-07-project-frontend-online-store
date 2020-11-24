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

// teste

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  try {
    const responseURL = await fetch(endpoint);
    const objectAPI = await responseURL.json();
    return objectAPI;
  } catch (Error) {
    console.log(Error);
  }
}
