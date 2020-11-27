/*
Para listar as categorias disponíveis:
Tipo da requisição: GET
Endpoint: https://api.mercadolibre.com/sites/MLB/categories
 */

/* Para buscar itens de uma categoria por termo:
Tipo da requisição: GET
Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY
 */

export async function getCategories() {
  // Implemente aqui
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const obj = await response.json();
  return obj;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const URL = 'https://api.mercadolibre.com/sites/MLB/search?';
  const response = await fetch(`${URL}category=${categoryId}&q=${query}`);
  const obj = await response.json();
  return obj;
}
