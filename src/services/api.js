export async function getCategories() {
  const endpoints = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endpoints);
  const object = await response.json();
  return object;
}

function generateEndpoint(...params) {
  let endpoints;
  if (params.length === null) {
    endpoints = 'https://api.mercadolibre.com/sites/MLB/categories';
  } else if (params.length === 1 && params[0].toString().startsWith('MLB')) {
    endpoints = `https://api.mercadolibre.com/sites/MLB/search?category=${params[0]}`;
  } else if (params.length === 1 && params[0]) {
    endpoints = `https://api.mercadolibre.com/sites/MLB/search?q=${params[0]}`;
  } else if (params[0].toString().startsWith('MLB') && params[1].toString()) {
    endpoints = `https://api.mercadolibre.com/sites/MLB/search?category=${params[0]}&q=${params[1]}`;
  }
  return endpoints;
}

export async function getProductsFromCategoryAndQuery(...params) {
  const response = await fetch(generateEndpoint(...params));
  const object = await response.json();
  return object;
}
