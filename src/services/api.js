export async function getCategories() {
  const endpoint = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const objc = await endpoint.json();

  return objc;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const objc = await endpoint.json();

  return objc;
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
