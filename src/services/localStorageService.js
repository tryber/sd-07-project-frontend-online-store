export const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('items'));
}

export const getItemsTotal = () => {
  const items = getFromLocalStorage()
  if (items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].cartQuantity;
    }
    return total;
  }
}

export const getItemById = (id) => {
  return getFromLocalStorage()
    .find(item => item.sku === id);
}

export const removeFromLocalStorage = (sku) => {
  return getFromLocalStorage()
  .filter(item => item.sku !== sku);
}

export const changeCartQuantity = (id , number) => {
  const {sku, name, cost, quantity, image, cartQuantity } = getItemById(id);
  const storageWithoutItem = removeFromLocalStorage(sku);
  localStorage.setItem('items',
    JSON.stringify([...storageWithoutItem, {
      sku,
      name,
      cost,
      quantity,
      image,
      cartQuantity: cartQuantity + number,
    }]));
}

export const saveOnLocalStorage = ({
  id,
  title,
  price,
  available_quantity: availableQuantity,
  thumbnail
}) => {
  if (!localStorage.length) {
    localStorage.setItem('items',
      JSON.stringify([{
        sku: id,
        name: title,
        cost: price,
        quantity: availableQuantity,
        image: thumbnail,
        cartQuantity: 1,
      }]));
    return;
  }
  const cartItem = getItemById(id);
  if (cartItem) {
    if (cartItem.cartQuantity === cartItem.quantity) return;
    changeCartQuantity(cartItem.sku, 1);
  } else {
    const objectValues = getFromLocalStorage();
    localStorage.setItem('items',
      JSON.stringify([...objectValues, {
        sku: id,
        name: title,
        cost: price,
        quantity: availableQuantity,
        image: thumbnail,
        cartQuantity: 1,
      }]));
  }
}
