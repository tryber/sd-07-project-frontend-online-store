function addToCart({
  title,
  thumbnail,
  price,
  id: idNewItem,
  category,
  searchKey,
  availableQuantity,
}) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (cart === undefined || cart === null) {
    cart = [];
  }
  const itemIndex = cart.findIndex(({ id }) => id === idNewItem);
  const NOT_FOUND_IN_ARRAY = -1;
  if (itemIndex === NOT_FOUND_IN_ARRAY) {
    cart = [...cart, {
      id: idNewItem,
      quantity: 1,
      title,
      thumbnail,
      price,
      category,
      searchKey,
      availableQuantity,
    }];
  } else {
    let { quantity } = cart[itemIndex];
    quantity += 1;
    cart[itemIndex] = {
      id: idNewItem,
      quantity,
      title,
      thumbnail,
      price,
      category,
      searchKey,
      availableQuantity,
    };
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

export default addToCart;
