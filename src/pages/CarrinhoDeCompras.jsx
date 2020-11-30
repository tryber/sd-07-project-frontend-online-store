import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD


class CarrinhoDeCompras extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 0,
    };
  }

  render() {
    const { cart } = this.state;
    const numberToComper = 0;
    if (cart === numberToComper) {
      return (
        <div>
          <button type="button">
            <Link
              to="/"
            >
              Inicial
            </Link>
          </button>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    } 
=======
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
>>>>>>> main-group-2
  }
}

export default CarrinhoDeCompras;
