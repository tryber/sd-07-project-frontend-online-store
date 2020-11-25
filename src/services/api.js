export async function getCategories() {
  return new Promise((resolve) => {
    const categories = 'https://api.mercadolibre.com/sites/MLB/categories';
    const fetchCategories = fetch(categories)
      .then((data) => data.json());
    resolve(fetchCategories);
  });
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  return new Promise((resolve) => {
    const categories = 'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY';
    const fetchByItem = fetch(categories)
      .then((data) => data.json());
    resolve(fetchByItem);
  });
}
