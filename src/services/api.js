export async function getCategories() {
  const response = await fetch("https://api.mercadolibre.com/sites/MLB/categories");
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, termo) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${termo}`);
  return response.json();

}
