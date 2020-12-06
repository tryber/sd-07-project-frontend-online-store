import React from 'react';
import PropTypes from 'prop-types';

import * as cartAPI from '../services/cartAPI';

class CartItemSummary extends React.Component {
  render() {
    const { id } = this.props;
    const valuesItem = cartAPI.returnItem(id);
    const item = valuesItem.info;
    return (
      <div
        data-testid="shopping-cart-product-name"
        className="cart-item"
      >
        <div>
          <img
            data-testid="imagem-product-cart"
            alt={ item.title }
            src={ item.thumbnail }
          />
        </div>
        <div>
          <h3>{item.title}</h3>
          <ul>
            <li>{`R$ ${item.price}`}</li>
            <li>{`Quantidade ${valuesItem.quantidade}`}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CartItemSummary;

CartItemSummary.propTypes = {
  id: PropTypes.string.isRequired,
};
