import React from 'react';
import PropTypes from 'prop-types';

import QuantifyProducts from './QuantifyProducts';
import * as cartAPI from '../services/cartAPI';

class CartItem extends React.Component {
  render() {
    const { id, updateCartAmount } = this.props;
    const itemValues = cartAPI.returnItem(id);
    const item = itemValues.info;
    return (
      <div data-testid="shopping-cart-product-name" className="cart-item">
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
            <QuantifyProducts
              id={ id }
              quantidade={ itemValues.quantidade }
              updateCartAmount={ updateCartAmount }
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default CartItem;

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  updateCartAmount: PropTypes.func.isRequired,
};
