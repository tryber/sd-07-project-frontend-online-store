import React, { Component } from 'react';
import ShoppingCartButton from '../Components/ShoppingCartButton';

class HomeInitial extends Component {
  render() {
    return (
      <div className="home-page">
      <ShoppingCartButton className="shopping-cart-button"/>
      <span data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</span>
      </div>
    )
  }
}

export default HomeInitial;
