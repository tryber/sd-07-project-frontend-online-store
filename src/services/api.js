
export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endpoint);
  const categories = await response.json();
  try {
    if (categories.error) {
      throw new Error(categories.error);
    } else {
      return categories;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let endpoint;

  if (categoryId && query) {
    endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else if (query) {
    endpoint = `https://api.mercadolibregit.com/sites/MLB/search?q=${query}`;
  } else {
    endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  }

  if (endpoint) {
    try {
      const response = await fetch(endpoint);
      const object = await response.json();
      if (object.error) {
        throw new Error(object.error);
      } else {
        return object;
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('ERROR: Não é possível fazer pesquisa sem parâmetros');
  }
}
