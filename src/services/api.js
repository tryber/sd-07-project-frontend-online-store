export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(url).then((result) => {
    console.log();
    return result.json();
  });
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`,
  );
  const products = await response.json();
  return products;
}
