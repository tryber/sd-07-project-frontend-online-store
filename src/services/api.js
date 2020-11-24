export async function getCategories() {
  const Request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const Result = await Request.json();
  return Result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const Request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const Result = await Request.json();
  return Result;
}
