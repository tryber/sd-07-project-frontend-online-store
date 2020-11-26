export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  // const response = await 
  // const categories = await response.then((result) => {
  //   return result;
  // })
  return fetch(url).then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`,
  );
  const products = await response.json();
  return products;
}
