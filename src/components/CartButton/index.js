import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from './Cart-Icon.svg';

import { getCartLength } from '../../services/cartApi';

class CartButton extends Component {
  constructor() {
    super();
    this.state = {
      cartLength: getCartLength(),
    };
    this.fetchCartLenght = this.fetchCartLenght.bind(this);
  }

  componentDidMount() {
    const fetchInterval = 200;
    setInterval(this.fetchCartLenght, fetchInterval);
  }

  fetchCartLenght() {
    this.setState({ cartLength: getCartLength() });
  }

  render() {
    const { cartLength } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src={ cartIcon } alt="Shopping cart sprite" width="50px" />
        </Link>
        <p data-testid="shopping-cart-size">{cartLength}</p>
      </div>
    );
  }
}

export default CartButton;
