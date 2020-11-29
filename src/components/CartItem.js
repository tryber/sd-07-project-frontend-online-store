import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.item.quantity,
    };

    this.addAmount = this.addAmount.bind(this);
    this.lessAmount = this.lessAmount.bind(this);
  }

  addAmount() {
    const { onClick, item } = this.props;
    item.quantity += 1;
    onClick(1);
    this.setState({ quantity: item.quantity });
  }

  lessAmount() {
    const { onClick, item } = this.props;
    const lowerLimit = 0;
    if (item.quantity > lowerLimit) {
      item.quantity -= 1;
    }
    onClick(-1);
  }

  render() {
    const { item } = this.props;
    const { title, thumbnail } = item;
    const { quantity } = this.state;

    return (
      <div>
        <button type="button">
          X
        </button>
        <img src={ thumbnail } alt={ title } />
        <h2 data-testid="shopping-cart-product-name">
          {title}
        </h2>
        <button
          type="button"
          onClick={ this.lessAmount }
          name="quantity"
          value={ quantity }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <h3 data-testid="shopping-cart-product-quantity">
          { quantity }
        </h3>

        <button
          type="button"
          onClick={ this.addAmount }
          name="quantity"
          value={ quantity }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <p>
          { `Valor Total da Compra:` }
        </p>

        <button type="submit"> Finalizar Compra </button>
      </div>
    );
  }
}
CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;
