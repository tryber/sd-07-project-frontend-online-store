export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return (request.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return (request.json());
}

export async function getItemById(title) {
  const itemRetrived = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${title}`);
  return itemRetrived.json();
}
