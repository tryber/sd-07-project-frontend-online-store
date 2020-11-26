import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../shopping-cart.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="container-header">
        <div className="inner-container">
          <div className="logo">
            <h1>Shopping</h1>
          </div>
          <div className="input-serch">
            <input type="text" placeholder="Buscar" className="input" />
          </div>
          <div className="cart-icon">
            <Link to="/cart" data-testid="shopping-cart-button">
              <img src={ icon } alt="cart-icon" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
