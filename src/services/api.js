export async function getCategories() {
  return Promise((resolve) => {
    fetch(
      'https://api.mercadolibre.com/sites/MLB/categories',
    ).then((response) => resolve(response.json()));
  });
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
