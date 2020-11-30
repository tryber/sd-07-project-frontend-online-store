export const readItensOnCart = () => JSON.parse(localStorage.getItem('cartItens'));
export const readSavedFormsOnStore = () => JSON.parse(localStorage.getItem('rates'));
export const getPrice = ((prods) => prods.forEach((item) => item.quantity * item.price));

export const saveItemOnCart = (cartItens) => {
  if (!cartItens) cartItens = [];
  localStorage.setItem('cartItens', JSON.stringify(cartItens));
};

export const saveRateOnStore = (formMessage) => {
  if (!readSavedFormsOnStore()) {
    const rates = [];
    rates.push(formMessage);
    localStorage.setItem('rates', JSON.stringify(rates));
  } else {
    const rates = readSavedFormsOnStore();
    rates.push(formMessage);
    localStorage.setItem('rates', JSON.stringify(rates));
  }
};


export const removeItemOnStorage = (index) => {
  const itensOnStorage = readItensOnCart();
  itensOnStorage.splice(index, 1);
  saveItemOnCart(itensOnStorage);
};

export const handleAddItemToCart = (product) => {
  let cartItens = readItensOnCart();

  if (!readItensOnCart()) {
    cartItens = [];
  }

  const newProduct = {
    id: product.id,
    title: product.title,
    thumbnail: product.thumbnail,
    price: product.price,
    quantity: 1,
  };

  let notDuplicated = false;

  cartItens.forEach((item) => {
    if (newProduct.id === item.id) {
      item.quantity += 1;
      console.log(item);
      notDuplicated = true;
    }
  });

  if (!notDuplicated) cartItens.push(newProduct);
  saveItemOnCart(cartItens);
};
