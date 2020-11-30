import React from 'react';
import { Link } from 'react-router-dom';
import ProdutosDoCarrinho from '../components/ProdutosDoCarrinho';

class CarrinhoDeCompras extends React.Component {
  initialMessageOrListProducts(products) {
    const numberToComper = 0;
    if (products.length !== numberToComper) {
      return products
        .map((product) => (
          <ProdutosDoCarrinho key={ product.title } product={ product } />));
    }
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  render() {
    const arrTosaveLocalStorage = [];

    if (localStorage.getItem('productsToBuy') !== null) {
      const jsonParseGetItem = JSON.parse(localStorage.getItem('productsToBuy'));
      arrTosaveLocalStorage.push(...jsonParseGetItem);
    }

    return (
      <div>
        <p data-testid="shopping-cart-product-quantity">{arrTosaveLocalStorage.length}</p>
        <button type="button">
          <Link
            to="/"
          >
            Inicial
          </Link>
        </button>
        { this.initialMessageOrListProducts(arrTosaveLocalStorage) }
      </div>
    );
  }
}

export default CarrinhoDeCompras;
