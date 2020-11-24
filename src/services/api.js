const getFetch = async (url) => await fetch(url)
  .then(element => element.json());

export function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return getFetch(url);
}

export function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return getFetch(url);
}
