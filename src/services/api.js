export async function getCategories() {
  try {
    const req = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const json = await req.json();

    return json;
  } catch (error) {
    console.log(`(From async/await getCategories) Error: ${error}`);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const req = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
    );
    const json = await req.json();
    return json;
  } catch (error) {
    console.log(`(From async/await getProductsFromCategoryAndQuery) Error: ${error}`);
  }
}

export async function getProductsFromId(id) {
  try {
    const req = await fetch(
      `https://api.mercadolibre.com/items/${id}`,
    );
    const json = await req.json();
    return json;
  } catch (error) {
    console.log(`(From async/await getProductsFromCategoryAndQuery) Error: ${error}`);
  }
}

export function addToCart(key) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (cart === undefined || cart === null) {
    cart = [];
  }
  const itemIndex = cart.findIndex(({ id }) => id === key);
  const NOT_FOUND_IN_ARRAY = -1;
  if (itemIndex === NOT_FOUND_IN_ARRAY) {
    cart = [...cart, { id: key, quantity: 1 }];
  } else {
    let { quantity } = cart[itemIndex];
    quantity += 1;
    cart[itemIndex] = { id: key, quantity };
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}
