const getFetch = (url) => fetch(url).then((element) => element.json());

export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
<<<<<<< HEAD
  try {
    const promisse = await getFetch(url);
    return promisse;
  } catch (err) { return 'Erro'; }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
=======
  const promisse = await getFetch(url);
  return promisse;
}
export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const promisse = await getFetch(url);
  return promisse;
}

export async function getProductsFromQuery(query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${''}_ID&q=${query}`;
>>>>>>> defee5958a5b15999adbc9c0e23ddcbea71e8bbe
  try {
    const promisse = await getFetch(url);
    return promisse;
  } catch (err) { return 'Erro'; }
}
