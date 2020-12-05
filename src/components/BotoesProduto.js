import React from 'react';
import PropTypes from 'prop-types';
import * as FunctionsToCart from './FunctionsToCart';

class BotoesProduto extends React.Component {
  render() {
    const { handleTotalPrice, updateLocalStorage, id } = this.props;
    return (
      <div>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => {
            FunctionsToCart.updateQuantity(id, 'soma');
            handleTotalPrice();
          } }
        >
          +
        </button>
        <button
          type="button"
          onClick={ () => {
            FunctionsToCart.updateQuantity(id, 'deletar');
            updateLocalStorage();
          } }
        >
          X
        </button>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => {
            FunctionsToCart.updateQuantity(id, 'subtração');
            handleTotalPrice();
          } }
        >
          -
        </button>
        <button type="submit">
          Finalizar a compra
        </button>
      </div>
    );
  }
}

export default BotoesProduto;

BotoesProduto.propTypes = {
  handleTotalPrice: PropTypes.func.isRequired,
  updateLocalStorage: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
