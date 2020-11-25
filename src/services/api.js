export async function getCategories() {
  const requestAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const allCategories = await requestAPI.json();
  return allCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const requestAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const searchedItems = await requestAPI.json();
  return searchedItems;
}

export default getCategories
export default getProductsFromCategoryAndQuery