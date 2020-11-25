export async function getCategories() {
  try {
    const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categories = await request.json();
    return categories;
  } catch (error) {
    throw new Error(`There was an error making the request: ${error}`);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const endpoint = `
    https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}
    `;
    const request = await fetch(endpoint);
    const response = await request.json();
    return response;
  } catch (error) {
    throw new Error(`There was an error making the request with id and query: ${error}`);
  }
}
