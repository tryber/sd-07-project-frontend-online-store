
export async function getCategories() {
  return new Promise((resolve) => {
    const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
    fetch(endPoint).then((request) => request.json()).then((object) => resolve(object));
  });
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return new Promise((resolve, reject) => {
    const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    fetch(endPoint)
      .then((request) => request.json())
      .then((object) => resolve(object))
      .catch((err) => reject(new Error(err.message)));
  });
}
