export async function getCategories() {
  return new Promise((resolve) => {
    const categories = 'https://api.mercadolibre.com/sites/MLB/categories';
    const fetchCategories = fetch(categories)
      .then((data) => data.json());
    resolve(fetchCategories);
  });
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return new Promise((resolve) => {
    if (categoryId && !query) {
      const categories = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
      const fetchByItem = fetch(categories)
        .then((data) => data.json());
      resolve(fetchByItem);
    }
    if (query && !categoryId) {
      const categories = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
      const fetchByItem = fetch(categories)
        .then((data) => data.json());
      resolve(fetchByItem);
    } else {
      const categories = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
      const fetchByItem = fetch(categories)
        .then((data) => data.json());
      resolve(fetchByItem);
    }
  });
}
