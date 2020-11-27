import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  handleCartItemIncrease(product) {
    const { addItem } = this.props;
    addItem(product);
  }

  handleCartItemRemove(product) {
    const { removeItem } = this.props;
    removeItem(product);
  }

  handleCartItemDecrease(product) {
    const { decreaseItem } = this.props;
    decreaseItem(product);
  }

  render() {
    const { data } = this.props;
    const { title, thumbnail, price, cartQuantity } = data;
    return (
      <article>
        <header>
          <h2 data-testid="shopping-cart-product-name">{title}</h2>
        </header>
        <main>
          <img alt="product thumbnail" src={ thumbnail } />
        </main>
        <footer>
          <p>{`R$ ${price}`}</p>
          <p data-testid="shopping-cart-product-quantity">{ cartQuantity }</p>
        </footer>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => this.handleCartItemIncrease(data) }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => this.handleCartItemDecrease(data) }
        >
          -
        </button>
        <button
          type="button"
          onClick={ () => this.handleCartItemRemove(data) }
        >
          X
        </button>
      </article>
    );
  }
}

CartItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    cartQuantity: PropTypes.number.isRequired,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
};

export default CartItem;
