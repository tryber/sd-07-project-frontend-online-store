export async function getCategories() {
  // Implemente aqui
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = (await fetch(endPoint)).json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const endPointCategory = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}`;
  const endPointItensInCategory = `https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$${query}`;

  if (categoryId) {
    const response = (await fetch(endPointCategory)).json();
    return response;
  } if (query) {
    const response = (await fetch(endPointItensInCategory)).json();
    return response;
  }
}
