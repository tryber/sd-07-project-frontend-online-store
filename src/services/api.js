export async function getCategories() {
  const end = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const end2 = await end.json();

  return end2;
}
getCategories();
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const end = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const end2 = await end.json();

  return end2;
}
