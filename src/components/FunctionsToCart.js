const arrTosaveLocalStorage = [];

if (localStorage.getItem('productsToBuy') !== null) {
  const jsonParseGetItem = JSON.parse(localStorage.getItem('productsToBuy'));
  arrTosaveLocalStorage.push(...jsonParseGetItem);
}
export function addToCart(title, price, thumbnail) {
  const objToLocalStorage = {
    title,
    price,
    thumbnail,
  };
  arrTosaveLocalStorage.push(objToLocalStorage);
  localStorage.setItem('productsToBuy', JSON.stringify(arrTosaveLocalStorage));
}

export function deleteFromCart() {

}
