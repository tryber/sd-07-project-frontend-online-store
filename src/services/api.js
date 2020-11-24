export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
      .then((response) => response.json());
  }
}

// export async function getProductsFromQuery(query) {
//   return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
//     .then((response) => response.json())
//     .then((data) => data);
// }


// export async function getProductsFromCategoryAndQuery(categoryId, query) {
//   if (categoryId && query) {
//     fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
//       .then((response) => response.json());
//   } else if (query) {
//     fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
//       .then((response) => response.json());
//   }
// }
