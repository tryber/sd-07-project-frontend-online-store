export async function getCategories() {
  const endpoint = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const objc = await endpoint.json();

  return objc;
}

export async function getProductsFromCategoryAndQuery(query, categoryId = 'MLB1953') {
  const endpoint = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const objc = await endpoint.json();

  return objc;
}
