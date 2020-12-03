import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EmptyList, ShoppingCardList, GoBack, Total } from '../components/index';
import ShoppingCartImage from '../images/shopping-cart.svg';
import './ShoppingCard.css';

class ShoppingCard extends Component {
  render() {
    const { location, changeQuantity, removeItem } = this.props;
    const { productsInShoppingCart } = location;
    const shoppingCardEmpty = 0;
    return (
      <div className="main">
        <GoBack />
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
          <div>
            <ShoppingCardList
              products={ productsInShoppingCart }
              changeQuantity={ changeQuantity }
              removeItem={ removeItem }
            />
            <Total productsInShoppingCart={ productsInShoppingCart } />
          </div>
        )}
      </div>
    );
  }
}

ShoppingCard.propTypes = {
  changeQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  location: PropTypes.shape({
    productsInShoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default ShoppingCard;
