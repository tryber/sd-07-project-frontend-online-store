export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let API = '';
  switch (true) {
    case (categoryId && query):
      API = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
      break;
    case (query):
      API = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
      break;
    default:
      API = `https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`;
      break;
  }

  const response = await fetch(API)
  .then((r) => r.json());
  if (response.error) {
  throw new Error(`endpoint não existe ${response.error}`);
  }
  return response;
}

export async function getProductDetail(productID) {
  console.log(productID);
  const response = await fetch(`https://api.mercadolibre.com/items/${productID}`)
  .then((r) => r.json());
  console.log(response);
  if (response.error) {
  throw new Error(`endpoint não existe ${response.error}`);
  }
  return response;
}