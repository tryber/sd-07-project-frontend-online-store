export async function getCategories() {
  return new Promise((resolve) => {
    const categories = 'https://api.mercadolibre.com/sites/MLB/categories';
    const fetchCategories = fetch(categories)
      .then((data) => data.json());
    resolve(fetchCategories);
  });
}


export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const CATEGORY_ID = categoryId
  const searchItem = query
  return new Promise((resolve) => {
    const categories = `https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${searchItem}`;
    const fetchByItem = fetch(categories)
      .then((data) => data.json());
    resolve(fetchByItem);
  });
}
