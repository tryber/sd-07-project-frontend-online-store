export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return (request.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return (request.json());
}

export async function getProductsFromCategory(categoryId) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  return (request.json());
}

export async function getProductsFromQuery(query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  return (request.json());
}
