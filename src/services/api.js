const getFetch = (url) => fetch(url).then(element => element.json());

export const getCategories = () =>
  getFetch('https://api.mercadolibre.com/sites/MLB/categories');

export const getProductsFromCategoryAndQuery = (categoryId, query) =>
  getFetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
