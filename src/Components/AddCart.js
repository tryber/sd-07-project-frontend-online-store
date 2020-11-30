export default function AddCart(product) {
  const { title, price, thumbnail } = product;
  const quantity = 1;
  let productRepet = false;
  const carrinho = JSON.parse(localStorage.getItem('carrinho'));
  const valor = (carrinho === null ? [] : carrinho);
  valor.forEach((item) => {
    if (item.title === title) {
      item.quantity += 1;
      productRepet = true;
    }
  });
  if (productRepet) {
    return localStorage.setItem('carrinho', JSON.stringify(valor));
  }
  valor.push({ title, thumbnail, price, quantity });
  localStorage.setItem('carrinho', JSON.stringify(valor));
}
