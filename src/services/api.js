export async function getCategories() {
  return new Promise((resolve, reject) => {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId || query) {
    let endPoint = 'https://api.mercadolibre.com/sites/MLB/search?';
    if (categoryId) {
      endPoint += `category=${categoryId}`;
    }
    if (query) {
      endPoint += endPoint.endsWith('?') ? `q=${query}` : `&q=${query}`;
    }
    return new Promise((resolve, reject) => {
      fetch(endPoint)
        .then((response) => response.json())
        .then((result) => {
          if (Object.entries(result).length) {
            resolve(result.results);
          } else {
            resolve(result);
          }
        })
        .catch((error) => reject(error));
    });
  }
  return {};
}
