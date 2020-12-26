export const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('items'));
}
export const getItemById = (id) => {
  return getFromLocalStorage()
    .find(item => item.sku === id);
}

export const increaseCartQuantity = ({
  sku,
  name,
  cost,
  quantity,
  image,
  cartQuantity,
}) => {
  const storageWithoutItem = getFromLocalStorage().filter(item => item.sku !== sku);
  localStorage.setItem('items',
    JSON.stringify([...storageWithoutItem, {
      sku,
      name,
      cost,
      quantity,
      image,
      cartQuantity: cartQuantity + 1,
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
    increaseCartQuantity(cartItem);
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

export const getItemsTotal = () => {
  const items = getFromLocalStorage()
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].cartQuantity;
  }
  return total;
}
