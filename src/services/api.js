export async function getCategories() {
  // Implemente aqui
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = (await fetch(endPoint)).json();
  return response;
}

export async function getProductsFromCategoryAndQuery(query, ...categoryId) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let endPointSearchIten;
  const size = 0;
  if (categoryId.length === size) {
    endPointSearchIten = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  } if (query === ' ') {
    endPointSearchIten = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId[0]}`;
  } else {
    endPointSearchIten = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId[0]}&q=${query}`;
  }
  const response = (await fetch(endPointSearchIten)).json();
  return response;
}
