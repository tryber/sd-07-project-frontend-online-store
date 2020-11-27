export function getProductsStorage() {
  const getProduct = localStorage.getItem('cart');
  const productReturn = JSON.parse(getProduct);
  return productReturn;
}

export async function delProductsStorage(productDel) {
  const elementsLocalStorage = await getProductsStorage();
  if (productDel) {
    const mapForDelete = await elementsLocalStorage
      .filter((element) => element.id !== productDel.id);
    await localStorage.clear();
    await localStorage.setItem('cart', JSON.stringify([...mapForDelete]));
  } else {
    localStorage.clear();
  }
}

export function updateProductsStorage(productItem) {
  let updateProductAll = [];
  const elementsLocalStorage = getProductsStorage();
  elementsLocalStorage.find((productTarget) => {
    if (productTarget.id === productItem.id && productTarget.qtt !== productItem.qtt) {
      productTarget.qtt = productItem.qtt;
      return productItem;
    }
    return '';
  });
  updateProductAll = [...elementsLocalStorage];

  localStorage.setItem('cart', JSON.stringify(updateProductAll));
  updateProductAll = [];
}

export async function setProductsStorage(product) {
  let setProductAll = [];
  const elementsLocalStorage = await getProductsStorage();

  if (elementsLocalStorage !== null) {
    const checkIdProduct = elementsLocalStorage
      .some((productTarget) => productTarget.id === product.id);
    // checkIdProduct ? setProductAll = [...elementsLocalStorage] : setProductAll = [...elementsLocalStorage, product];
    if (checkIdProduct) {
      setProductAll = [...elementsLocalStorage];
    } else {
      setProductAll = [...elementsLocalStorage, product];
    }
  } else {
    setProductAll.push(product);
  }

  if (setProductAll.length) localStorage.setItem('cart', JSON.stringify(setProductAll));
  setProductAll = [];
}
