export async function getCategories() {
  const endpoint = "https://api.mercadolibre.com/sites/MLB/categories";
  try {
    const response = await fetch(endpoint);
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = "https://api.mercadolibre.com/sites/MLB/search?";
  try {
    if (categoryId && query) {
      const url = `${endpoint}category=${categoryId}&q=${query}`;
      const response = await fetch(url);
      const categories = await response.json();
      return categories;
    }

    if (categoryId) {
      const url = `${endpoint}category=${categoryId}`;
      const response = await fetch(url);
      const categories = await response.json();
      return categories;
    }

    if (query) {
      const url = `${endpoint}q=${query}`;
      const response = await fetch(url);
      const categories = await response.json();
      return categories;
    }
  } catch (error) {
    console.log(error);
  }
}
