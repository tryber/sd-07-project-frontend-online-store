import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../images/cart.png';

class Button extends React.Component {
  render() {
    const { productsCart, sizeArray } = this.props;
    return (
      <div>
        <Link
          to={ {
            pathname: '/cart',
            state: { productsCart, sizeArray },
          } }
          data-testid="shopping-cart-button"
        >
          <img
            className="btImg"
            src={ cart }
            alt="Carrinho de Compras"
          />
        </Link>
      </div>
    );
  }
}

export default Button;
