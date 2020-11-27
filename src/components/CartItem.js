import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: '',
      title: '',
      quantity: 0,
      price: 0,
      total: 'XXX,XX',
    };
    this.addAmount = this.addAmount.bind(this);
    this.lessAmount = this.lessAmount.bind(this);
  }

  componentDidMount() {
    this.handleState();
  }

  handleState() {
    const { item } = this.props;
    const { title, thumbnail, price, quantity } = item;
    this.setState({ title, thumbnail, price, quantity, total: price });
  }

  addAmount() {
    const { price } = this.state;
    let { quantity, total } = this.state;
    quantity += 1;
    total = price * quantity;
    this.setState({ quantity, total });
    console.log(quantity);
  }

  lessAmount() {
    const lowerLimit = 0;
    const { price } = this.state;
    let { quantity, total } = this.state;
    if (quantity > lowerLimit) {
      quantity -= 1;
    }
    total = price * quantity;
    this.setState({ quantity, total });
    console.log(quantity);
  }

  render() {
    const { title, thumbnail, total, quantity } = this.state;
    return (
      <div>
        <button
          type="button"
        >
          X
        </button>
        <img src={ thumbnail } alt={ title } />
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <button
          type="button"
          onClick={ this.lessAmount }
          name="quantity"
          value={ quantity }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <h3 data-testid="shopping-cart-product-quantity">{ quantity }</h3>
        <button
          type="button"
          onClick={ this.addAmount }
          name="quantity"
          value={ quantity }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <h4>{ total }</h4>
        {console.log(title)}
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
