import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCartItems extends Component {
  render() {
    const { item, addCart, removeItemCart, removeCart } = this.props;
    const { title, price, thumbnail, countItems } = item;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p>{ price }</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => addCart(item) }
        >
          +
        </button>
        <p data-testid="shopping-cart-product-quantity">
          { `Quantidade de itens: ${countItems}` }
        </p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => removeItemCart(item) }
        >
          -
        </button>
        <p>
          Preço do produto=
          {price * countItems }
        </p>
        <button
          type="button"
          onClick={ () => removeCart(item) }
        >
          X
        </button>
      </div>
    );
  }
}

ProductCartItems.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    countItems: PropTypes.number.isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  removeItemCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
};

export default ProductCartItems;
