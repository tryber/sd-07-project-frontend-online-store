import React, { Component } from 'react';
import ShoppingCartButton from '../Components/ShoppingCartButton';

class HomeInitial extends Component {
  render() {
    return (
      <div className="home-page">
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <ShoppingCartButton className="shopping-cart-button" />
      </div>
    );
  }
}

export default HomeInitial;
