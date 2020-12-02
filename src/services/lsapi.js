const SHOPPING_CART_LIST = 'ShoppingCartList';
const SELECTED_PRODUCT = 'SelectedProduct';
const DEFAULT_TOTAL_PRICE = 0;
const DEFAULT_TOTAL_QUANTITY = 0;
const MIN_QUANTITY = 0;

export function getShoppingCartList() {
  const cartList = JSON.parse(localStorage.getItem(SHOPPING_CART_LIST));
  if (!cartList) {
    return [];
  }
  return cartList;
}

export function getTotalPrice() {
  return getShoppingCartList().reduce((totalPrice, item) => (
    totalPrice + (item.product.price * item.quantity)
  ), DEFAULT_TOTAL_PRICE);
}

export function getTotalQuantity() {
  return getShoppingCartList().reduce((totalQuantity, item) => (
    totalQuantity + item.quantity
  ), DEFAULT_TOTAL_QUANTITY);
}

export function getAvailableQuantity(product) {
  const itemPurchased = getShoppingCartList()
    .find((item) => item.product.id === product.id);
  if (itemPurchased) {
    const {
      product: {
        available_quantity: availableQuantity,
      },
      quantity: purchasedQuantity,
    } = itemPurchased;
    return availableQuantity - purchasedQuantity;
  }
  return product.available_quantity;
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

export function updateShoppingCartList(product, quantity) {
  const newShoppingCartList = getShoppingCartList();
  const foundItem = newShoppingCartList.find((item) => item.product.id === product.id);
  if (foundItem) {
    const indexItem = newShoppingCartList.indexOf(foundItem);
    if (quantity > MIN_QUANTITY) {
      newShoppingCartList[indexItem].quantity = quantity;
    } else {
      newShoppingCartList.splice(indexItem, 1);
    }
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

export function getEvaluationList(productId) {
  const evaluationList = JSON.parse(localStorage.getItem(productId));
  if (evaluationList) {
    return evaluationList;
  }
  return [];
}

export function addEvaluation(productId, evaluation) {
  const evaluationList = getEvaluationList(productId);
  evaluationList.push(evaluation);
  localStorage.setItem(productId, JSON.stringify(evaluationList));
}
