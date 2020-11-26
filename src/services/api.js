export async function getCategories() {
  const endpoint = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const objc = await endpoint.json();

  return objc;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}&limit=20`);
  const objc = await endpoint.json();

  return objc;
}
