localStorage.setItem('cart', JSON.stringify([]))

export const readCart = () => JSON.parse(localStorage.getItem('cart'))

export const addItemToCart = ( item ) => {
  const cart  = readCart()
  const newCart = [...cart, {
    item,
    count: 1
  }]
  localStorage.setItem('cart', JSON.stringify(newCart))
}