import React from 'react';
import { Link } from 'react-router-dom';
import ProdutosDoCarrinho from '../components/ProdutosDoCarrinho';
import * as FunctionsToCart from '../components/FunctionsToCart';

class CarrinhoDeCompras extends React.Component {
  constructor() {
    super();
    this.state = {
      totalPrice: FunctionsToCart.handleTotalPrice(),
      update: [],
    };
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
  }

  getTotalPrice() {
    this.setState({ totalPrice: FunctionsToCart.handleTotalPrice() });
  }

  updateLocalStorage() {
    this.setState({ update: JSON.parse(localStorage.getItem('productsToBuy')) });
  }

  initialMessageOrListProducts(products) {
    const numberToComper = 0;
    if (products.length !== numberToComper) {
      return products
        .map((product) => (
          <ProdutosDoCarrinho
            key={ product.title }
            product={ product }
            handleTotalPrice={ this.getTotalPrice }
            updateLocalStorage={ this.updateLocalStorage }
          />
        ));
    }
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }


  render() {
    const arrTosaveLocalStorage = [];
    const { totalPrice, update } = this.state;
    console.log(update);

    if (localStorage.getItem('productsToBuy') !== null) {
      const jsonParseGetItem = JSON.parse(localStorage.getItem('productsToBuy'));
      arrTosaveLocalStorage.push(...jsonParseGetItem);
    }
    return (
      <div>
        <button type="button">
          <Link
            to="/"
          >
            Inicial
          </Link>
        </button>
        { this.initialMessageOrListProducts(arrTosaveLocalStorage) }
        <p>{ totalPrice }</p>
      </div>
    );
  }
}

export default CarrinhoDeCompras;
