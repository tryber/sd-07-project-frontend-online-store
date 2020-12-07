const arrTosaveLocalStorage = [];

export function handleTotalPrice() {
  let jsonParseGetItem = [];
  const initialValue = 0;
  if (localStorage.getItem('productsToBuy') !== null) {
    jsonParseGetItem = JSON.parse(localStorage.getItem('productsToBuy'));
  }
  const total = jsonParseGetItem.reduce((acc, product) => {
    const totalPrice = product.price * product.quantity;
    return acc + totalPrice;
  }, initialValue);
  return total;
}

function verifyCartProduct(id) {
  let jsonParseGetItem = [];
  if (localStorage.getItem('productsToBuy') !== null) {
    jsonParseGetItem = JSON.parse(localStorage.getItem('productsToBuy'));
  }
  const result = jsonParseGetItem.some((product) => product.id === id);
  return result;
}

function customAlert(message) {
  window.alert(message);
}

export function updateQuantity(id, operation) {
  if (operation === 'soma') {
    const cart = JSON.parse(localStorage.getItem('productsToBuy'));
    const updateAddOperation = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    return localStorage.setItem('productsToBuy', JSON.stringify(updateAddOperation));
  } if (operation === 'subtração') {
    const cart = JSON.parse(localStorage.getItem('productsToBuy'));
    const updateSubtractionOperation = cart.map((product) => {
      if (product.id === id) {
        if (product.quantity <= 1) {
          customAlert('Quantidade mínima atingida!');
          return { ...product, quantity: product.quantity };
        }
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    return localStorage
      .setItem('productsToBuy', JSON.stringify(updateSubtractionOperation));
  } if (operation === 'deletar') {
    const cart = JSON.parse(localStorage.getItem('productsToBuy'));
    const deleteProduct = cart.filter((product) => product.id !== id);
    return localStorage.setItem('productsToBuy', JSON.stringify(deleteProduct));
  }
}

export function addToCart(title, price, thumbnail, quantity, id) {
  if (verifyCartProduct(id)) {
    return customAlert('Produto já existe no carrinho!');
  }

  const objToLocalStorage = {
    title,
    price,
    thumbnail,
    quantity,
    id,
  };
  console.log(arrTosaveLocalStorage);

  arrTosaveLocalStorage.push(objToLocalStorage);
  localStorage.setItem('productsToBuy', JSON.stringify(arrTosaveLocalStorage));
}

export function deleteFromCart() {

}
