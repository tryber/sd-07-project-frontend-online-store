export async function getCategories() {
  return new Promise((resolve, reject) => {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(new Error(error.message)));
  });
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return new Promise((resolve, reject) => {
    fetch(endPoint)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(new Error(error.message)));
  });
}
