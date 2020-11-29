import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartIcon extends Component {
  /* constructor(props){
    super(props);
    } */

  render() {
    const { totalQuantity } = this.props;
    return (
      <Link
        to="/shoopingcart"
        data-testid="shopping-cart-button"
        className="home-initial-link"
      >
        <img
          src="images/shopping-cart-50.png"
          alt="Carrinho de Compras"
        />
        <span data-testid="shopping-cart-size">{totalQuantity}</span>
      </Link>
    );
  }
}

export default CartIcon;
