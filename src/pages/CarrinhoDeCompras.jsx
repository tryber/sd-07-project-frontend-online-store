import React from 'react';
import { Link } from 'react-router-dom';

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
  }
}

export default CarrinhoDeCompras;
