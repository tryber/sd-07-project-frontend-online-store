import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../images/CartIcon.png';

class home extends Component {
  render() {
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link to="/shoppingCart">
          <img
            src={ CartIcon }
            width="70"
            height="70"
            alt="shopping-cart-icon"
            data-testid="shopping-cart-button"
          />
        </Link>
      </div>
    );
  }
}
export default home;
