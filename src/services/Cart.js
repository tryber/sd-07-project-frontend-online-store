const readCartItems = () => JSON.parse(localStorage.getItem("cartItems"));

const addItemCart = (newItem) => {
    const cart = readCartItems();
    localStorage.setItem("cartItems", JSON.stringify([...cart,newItem]));
}
 export {readCartItems, addItemCart};