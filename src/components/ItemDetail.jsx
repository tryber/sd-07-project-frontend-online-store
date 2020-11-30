import React from 'react';
import PropTypes from 'prop-types';
import ButtonShop from './ButtonShop';
import { addToCart } from '../services/cartAPI';

export default class ItemDetail extends React.Component {
  render() {
    const { location: { state: { title } } } = this.props;
    const { location: { state } } = this.props;
    return (
      <div>
        <ButtonShop />
        <h1>Product Detail</h1>
        <div data-testid="product-detail-name">
          {title}
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addToCart(state) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ItemDetail.propTypes = {
  id: PropTypes.string,
}.isRequired;
