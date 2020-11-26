export async function getCategories() {
  try {
    const requestCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const result = requestCategories.json();
    return result;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}
  `).then((response) => response.json());
}
