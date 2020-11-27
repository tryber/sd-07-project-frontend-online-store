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
    const { count } = this.state;
    if (count < 0) {
      this.setState({
        count: 0,
      });
    }
    return count;
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <img src={thumbnail} alt={title} />
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <p>{price}</p>
        <div>
          <button onClick={this.countAdd}>+</button>
          <span data-testid="shopping-cart-product-quantity">
            {this.count()}
          </span>
          <button onClick={this.countLess}>-</button>
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
  }).isRequired,
};

export default ItemCart;
