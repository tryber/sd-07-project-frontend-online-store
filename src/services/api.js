export async function getCategories() {
  const requestAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const allCategories = await requestAPI.json();
  return allCategories;
  
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let requestAPI;
  if (categoryId && query) {
    requestAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  } else if (categoryId) {
    requestAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  } else {
    requestAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?&q=${query}`);
  }
  const searchedItems = await requestAPI.json();
  return searchedItems;
}

export async function fetchAPIByID(itemID) {
  const apiProductByID = await fetch(`https://api.mercadolibre.com/items/${itemID}`);
  const objectProduct = await apiProductByID.json();
  return objectProduct; 
}

