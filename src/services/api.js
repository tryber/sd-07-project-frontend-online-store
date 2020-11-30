export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchResult = await fetch(url);
  const expectedArray = await fetchResult.json();
  return expectedArray;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchResult = await fetch(url);
  const expectedObject = await fetchResult.json();
  return expectedObject;
}
