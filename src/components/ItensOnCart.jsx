import React from 'react';
import PropTypes from 'prop-types';


class ItensOnCart extends React.Component {
  render() {
    const {
      product,
      handleRemoveItem,
      handleSubtractQuantity,
      handleAddQuantity,
    } = this.props;


    return (
      <div className="cart-item-product">
        <button type="button" onClick={ () => handleRemoveItem(product.id) }>X</button>
        <img src={ product.thumbnail } alt="foto do produto" />
        <div className="cart-item-description">
          <span data-testid="shopping-cart-product-name">{ product.title }</span>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => handleSubtractQuantity(product.id) }
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{ product.quantity }</span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => handleAddQuantity(product.id) }
          >
            +
          </button>
          <span>
            R$:
            { product.price }
          </span>
        </div>
      </div>
    );
  }
}

export default ItensOnCart;


ItensOnCart.propTypes = {
  product: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleSubtractQuantity: PropTypes.func.isRequired,
  handleAddQuantity: PropTypes.func.isRequired,
};
