import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { data: { title, thumbnail, price, cartQuantity } } = this.props;
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
};

export default CartItem;
