const getFetch = (url) => fetch(url).then((element) => element.json());

export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const promisse = await getFetch(url);
    return promisse;
  } catch (err) {
    return ('Erro');
  }
}
export async function getProductsFromCategoryAndQuery(query = '', categoryId = '') {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  try {
    const promisse = await getFetch(url);
    return promisse;
  } catch (err) {
    return ('Erro');
  }
}
