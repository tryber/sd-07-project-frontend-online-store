export async function getCategories() {
  try {
    const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categories = await request.json();
    return categories;
  } catch (error) {
    throw new Error(`There was an error making the request: ${error}`);  
  }
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
