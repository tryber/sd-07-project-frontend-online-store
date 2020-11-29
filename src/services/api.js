export async function getCategories() {
  return new Promise((resolve, reject) => {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then((response) => (
        response.json().then((results) => resolve(results))
      )).catch((error) => reject(error));
  });
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
      .then((response) => (
        response.json().then((results) => resolve(results))
      )).catch((error) => reject(error));
  });
}
