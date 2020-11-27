export async function getCategories() {
  return new Promise((resolve) => {
    fetch(
      'https://api.mercadolibre.com/sites/MLB/categories',
    ).then((response) => resolve(response.json()));
  });
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (query === undefined) {
    return new Promise((resolve) => {
      fetch(
        `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
      ).then((response) => resolve(response.json()));
    });
  }

  if (categoryId === undefined) {
    return new Promise((resolve) => {
      fetch(
        `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
      ).then((response) => resolve(response.json()));
    });
  }

  return new Promise((resolve) => {
    fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
    ).then((response) => resolve(response.json()));
  });
}
