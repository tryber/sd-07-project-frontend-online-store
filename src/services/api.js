export async function getCategories() {
  const ENDPOINT_CATEGORIES = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await fetch(ENDPOINT_CATEGORIES);
    const result = await response.json();
    return new Promise((resolve) => (
      resolve(result)
    ));
  } catch (error) {
    return new Promise((_resolve, reject) => (
      reject(new Error(error.message))
    ));
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const ENDPOINT_SEARCH = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  try {
    const response = await fetch(ENDPOINT_SEARCH);
    const result = await response.json();
    return new Promise((resolve) => (
      resolve(result)
    ));
  } catch (error) {
    return new Promise((_resolve, reject) => (
      reject(new Error(error.message))
    ));
  }
}
