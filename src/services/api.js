export async function getCategories() {
  const Request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const Json = await Request.json();
  return Json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const Request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const Json = await Request.json();
  return Json;
}
