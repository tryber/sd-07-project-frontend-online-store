export async function getCategories() {
  // Implemente aqui
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = (await fetch(endPoint)).json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const endPointItensInCategory = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}&q=$${query}`;
  const endPointSearchIten = `https://api.mercadolibre.com/sites/MLB/search?q=$${query}`;

  if (categoryId && query) {
    const response = (await fetch(endPointItensInCategory)).json();
    return response;
  } if (!categoryId) {
    const response = (await fetch(endPointSearchIten)).json();
    return response;
  }
}
