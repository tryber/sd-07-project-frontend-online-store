import React from 'react';
import { Link } from 'react-router-dom';
import ProdutosDoCarrinho from '../components/ProdutosDoCarrinho';
import * as FunctionsToCart from '../components/FunctionsToCart';

class CarrinhoDeCompras extends React.Component {
  
  constructor() {
    super();
    this.state = {
      totalPrice: FunctionsToCart.handleTotalPrice(),
    }
    this.teste = this.teste.bind(this);
  }
  
  teste() {
    this.setState({ totalPrice: FunctionsToCart.handleTotalPrice() })
  }


  // handleTotalPrice(quantity, price) {
  //   this.setState((previousState) => ({ totalPrice: (quantity * price) + previousState.totalPrice }));
  // }
  initialMessageOrListProducts(products) {
    const numberToComper = 0;
    if (products.length !== numberToComper) {
      return products
        .map((product) => (
          <ProdutosDoCarrinho key={ product.title } product={ product } handleTotalPrice={ this.teste } />
        ));
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
    console.log(this.state.totalPrice)

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
        <p>{this.state.totalPrice}</p>     
      </div>
    );
  }
}

export default CarrinhoDeCompras;
