import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  increaseQuantity() {
    const { updateQuantity, id } = this.props;
    let { quantity } = this.props;
    quantity += 1;
    updateQuantity({ id, quantity });
  }

  decreaseQuantity() {
    const { updateQuantity, id } = this.props;
    let { quantity } = this.props;
    if (quantity > 1) {
      quantity -= 1;
      updateQuantity({ id, quantity });
    } else {
      quantity = 1;
      updateQuantity({ id, quantity });
    }
  }

  removeItem() {
    const { removeItem, id } = this.props;
    removeItem(id);
  }

  render() {
    const { title, thumbnail, price, id, quantity, availableQuantity } = this.props;
    return (
      <div key={ id }>
        <h2 data-testid="shopping-cart-product-name">{title}</h2>
        <img src={ thumbnail } alt="thumb" />
        <p>{price}</p>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {`${quantity} de ${availableQuantity}`}
        </p>
        <button
          disabled={ quantity <= 1 }
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decreaseQuantity }
        >
          -
        </button>
        <button
          disabled={ quantity >= availableQuantity }
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.increaseQuantity }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-remove"
          onClick={ this.removeItem }
        >
          ×
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,

};

export default CartItem;
