import React from 'react';
import PropTypes from 'prop-types';

class ItemCart extends React.Component {
  constructor() {
    super();
    this.countAdd = this.countAdd.bind(this);
    this.countLess = this.countLess.bind(this);
    this.count = this.count.bind(this);

    this.state = {
      count: 1,
    };
  }

  countAdd() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  countLess() {
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  }

  count() {
    const { product } = this.props;
    const { available_quantity } = product;
    const { count } = this.state;
    if (count < 1) {
      this.setState({
        count: 1,
      });
    } else if (count > available_quantity) {
      this.setState({
        count: available_quantity,
      });
    }
    return count;
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <p>{price}</p>
        <div>
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ this.countAdd }
          >
            +
          </button>
          <span data-testid="shopping-cart-product-quantity">
            {this.count()}
          </span>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.countLess }
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

ItemCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    sold_quantity: PropTypes.number,
  }).isRequired,
};

export default ItemCart;
