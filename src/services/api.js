export async function getCategories() {
  const req = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = await req.json();

  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const req = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );
  const json = await req.json();

  return json;
}
