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
  let request = '';
  let objectJson = '';
  if (categoryId && query) {
    try {
      request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}
      `);
      objectJson = request.json();
      return objectJson;
    } catch (error) {
      return error;
    }
  } else if (categoryId && query === '') {
    try {
      request = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}
      `);
      objectJson = request.json();
      return objectJson;
    } catch (error) {
      return error;
    }
  } else {
    try {
      request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}
      `);
      objectJson = request.json();
      return objectJson;
    } catch (error) {
      return error;
    }
  }
}
