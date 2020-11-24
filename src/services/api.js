export async function getCategories() {
  try {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
    const data = await fetch(endpoint);
    const categories = await data.json();
    return categories;
  } catch (err) {
    throw new Error(`requisição nao concluida: ${err.message}`);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const data = await fetch(endpoint);
    const result = await data.json();
    return result;
  } catch (err) {
    throw new Error(`requisição não concluida: ${err.message}`);
  }
}

export async function getProductsFromQuery(query) {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const data = await fetch(endpoint);
    const result = await data.json();
    return result;
  } catch (err) {
    throw new Error(`requisição não concluida: ${err.message}`);
  }
}
