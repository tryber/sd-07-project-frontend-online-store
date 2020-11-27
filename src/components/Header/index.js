import React, { Component } from 'react';
import ShoppingCartButton from '../ShoppingCartButton';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <ShoppingCartButton />
      </div>
    );
  }
}

export default Header;
