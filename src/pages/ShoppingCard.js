import React, { Component } from 'react';
import EmptyList from '../components/EmptList';
import ShoppingCardList from '../components/ShoppingCardList';
import ShoppingCartImage from '../images/shopping-cart.svg';
import './ShoppingCard.css';

class ShoppingCard extends Component {
  render() {
    const { location } = this.props;
    const { productsInShoppingCart } = location;
    const shoppingCardEmpty = 0;
    return (
      <div className="main">
        <div className="header">
          <img
            className="imagem-card"
            src={ ShoppingCartImage }
            alt="Carrinho de Compras"
          />
          <span className="title">Carrinho de Compras</span>
        </div>
        {productsInShoppingCart.length === shoppingCardEmpty ? (
          <EmptyList />
        ) : (
          <ShoppingCardList products={ productsInShoppingCart } />
        )}
      </div>
    );
  }
}

export default ShoppingCard;
