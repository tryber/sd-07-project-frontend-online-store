export async function getCategories() {
  try {
    const response = await fetch(
      'https://api.mercadolibre.com/sites/MLB/categories',
    );
    const categories = await response.json();
    return categories;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProductsFromQuery(query) {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
