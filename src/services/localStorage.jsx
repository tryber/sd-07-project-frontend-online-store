export const readCart = () => JSON.parse(localStorage.getItem('cart'));

export const saveCart = (cart) => { localStorage.setItem('cart', JSON.stringify(cart)); };

export const addToCart = (product) => {
  let cart = readCart();
  if (!cart) cart = [];
  const item = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
    amount: 1,
  };
  let unique = false;
  cart.forEach((element) => {
    if (item.id === element.id) {
      element.amount += 1;
      unique = true;
    }
  });

  if (!unique) cart.push(item);
  saveCart(cart);
};

export const addToCartFromDetails = (product) => {
  saveCart(product);
};