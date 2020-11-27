export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = await fetch(endpoint);
  const response = request.json();
  console.log(response);
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '', id_item) {
  
  if(id_item != undefined){
    const endpoint = `https://api.mercadolibre.com/items?ids=${id_item}`;
    const request = await fetch(endpoint);
    const response = request.json();
    console.log(response);
    return response;
  }
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const request = await fetch(endpoint);
  const response = request.json();
  return response;
}
