export async function getCategories() {
  return Promise((resolve) => {
    fetch(
      'https://api.mercadolibre.com/sites/MLB/categories',
    ).then((response) => resolve(response.json()));
  });
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && !query) {
    return Promise((resolve) => {
      fetch(
        `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
      ).then((response) => resolve(response.json()));
    });
  }
  if (!categoryId && query) {
    return Promise((resolve) => {
      fetch(
        `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
      ).then((response) => resolve(response.json()));
    });
  }

  return Promise((resolve) => {
    fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
    ).then((response) => resolve(response.json()));
  });
}
