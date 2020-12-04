const arrTosaveLocalStorage = [];

export function handleTotalPrice() {
  let jsonParseGetItem = [];
  if (localStorage.getItem('productsToBuy') !== null) {
    jsonParseGetItem = JSON.parse(localStorage.getItem('productsToBuy'));
  }
  const total = jsonParseGetItem.reduce((acc, product) => {
    console.log(product)
    let totalPrice = product.price * product.quantity;
    return acc + totalPrice
  }, 0)
  return total
}

function verifyCartProduct(id) {
  let jsonParseGetItem = [];
  if (localStorage.getItem('productsToBuy') !== null) {
    jsonParseGetItem = JSON.parse(localStorage.getItem('productsToBuy'));
    return arrTosaveLocalStorage.push(...jsonParseGetItem);
  }
  const result = jsonParseGetItem.some(product => product.id === id);
  return result
}

export function updateQuantity(id, operation) {
  if(operation === "soma") {
    const cart = JSON.parse(localStorage.getItem('productsToBuy'));
    const updateAddOperation = cart.map(product => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 }
      }
      return product
    })
    localStorage.setItem('productsToBuy', JSON.stringify(updateAddOperation));
  } else if (operation === "subtração") {
    const cart = JSON.parse(localStorage.getItem('productsToBuy'));
    const updateSubtractionOperation = cart.map(product => {
      if (product.id === id) {
        if (product.quantity < 2) {
          return alert('Quantidade mínima atingida!')
        }
        return { ...product, quantity: product.quantity - 1 }
      }
      return product
    })
    localStorage.setItem('productsToBuy', JSON.stringify(updateSubtractionOperation));  
  } 
  
}

export function addToCart(title, price, thumbnail, quantity, id) {
  let jsonParseGetItem = [];

  if (localStorage.getItem('productsToBuy') !== null) {
    jsonParseGetItem = JSON.parse(localStorage.getItem('productsToBuy'));
    arrTosaveLocalStorage.push(...jsonParseGetItem);
  }

  // if(verifyCartProduct(id)) {
  //   const updateOnlyQuantityProduct = jsonParseGetItem.map(product => {
  //     if (product.id === id) {
  //       return { ...product, quantity: product.quantity + 1 }
  //     }
  //     return product      
  //   })
  //   localStorage.setItem('productsToBuy', JSON.stringify(updateOnlyQuantityProduct));
  //   return updateOnlyQuantityProduct;
  // }

  const objToLocalStorage = {
    title,
    price,
    thumbnail,
    quantity,
    id,
  };

  arrTosaveLocalStorage.push(objToLocalStorage);
  localStorage.setItem('productsToBuy', JSON.stringify(arrTosaveLocalStorage));
}

export function deleteFromCart() {

}
