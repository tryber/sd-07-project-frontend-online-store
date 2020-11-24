export async function getCategories() {
  // Implemente aqui
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await fetch(endpoint);
    const categories = await response.json();
    console.log(categories);
    return categories;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const endpoint = ' https://api.mercadolibre.com/sites/MLB/search?';
  try {
    // Buscar itens por termo e categoria:
    if(categoryId && query) {
      const url = `${endpoint}category=${categoryId}&q=${query}`;
      const response = await fetch(url);
      const categories = await response.json();
      console.log(categories);
      return categories;
    }
    // Buscar itens por termo:
    if (categoryId && query === 'undefined') {
      const url = `${endpoint}category=${categoryId}`;
      const response = await fetch(url);
      const categories = await response.json();
      console.log(categories);
      return categories;
    }
    // Buscar itens por categoria:
    if (categoryId === 'undefined' && query) {
      const url = `${endpoint}q=${query}`;
      const response = await fetch(url);
      const categories = await response.json();
      console.log(categories);
      return categories;
    }
  } catch (error) {
    console.log(error);
  }
}
