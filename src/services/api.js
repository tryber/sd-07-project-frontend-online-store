export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const object = await request.json();
  return object;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let request = null;
  if (categoryId && query === '') {
    request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  } else if (categoryId === '' && query) {
    request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  } else {
    request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  }
  const object = await request.json();
  return object;
}
