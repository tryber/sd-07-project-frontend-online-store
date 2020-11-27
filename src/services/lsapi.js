const SHOPPING_CART_LIST = 'ShoppingCartList';
const SELECTED_PRODUCT = 'SelectedProduct';

export function getShoppingCartList() {
  const cartList = JSON.parse(localStorage.getItem(SHOPPING_CART_LIST));
  if (!cartList) {
    return [];
  }
  return cartList;
}

export function addToShoppingCartList(product, quantity) {
  const newShoppingCartList = getShoppingCartList();
  const foundItem = newShoppingCartList.find((item) => item.product.id === product.id);
  if (foundItem) {
    const indexItem = newShoppingCartList.indexOf(foundItem);
    newShoppingCartList[indexItem].quantity += quantity;
    localStorage.setItem(SHOPPING_CART_LIST, JSON.stringify(newShoppingCartList));
  } else {
    const itemShoppingCartList = { product, quantity };
    newShoppingCartList.push(itemShoppingCartList);
    localStorage.setItem(SHOPPING_CART_LIST, JSON.stringify(newShoppingCartList));
  }
}

export function getSelectedProduct() {
  return JSON.parse(localStorage.getItem(SELECTED_PRODUCT));
}

export function setSelectedProduct(product) {
  localStorage.setItem(SELECTED_PRODUCT, JSON.stringify(product));
}
