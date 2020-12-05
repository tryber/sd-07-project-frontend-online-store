import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductInCart extends Component {
  constructor() {
    super();
    this.mountState = this.mountState.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.removeQuantity = this.removeQuantity.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.state = {
      name: '',
      quantity: 0,
    };
  }

  componentDidMount() {
    this.mountState();
  }

  mountState() {
    const { product } = this.props;
    console.log(product);
    this.setState({
      name: product.title,
      quantity: Number(product.quantityInCart),
    });
  }

  addQuantity() {
    this.setState((state) => ({
      quantity: state.quantity + 1,
    }));
  }

  removeQuantity() {
    this.setState((state) => ({
      quantity: state.quantity - 1,
    }));
  }

  removeProduct() {
    this.setState({ quantity: 0 });
  }

  renderProduct() {
    const { name, quantity } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">
          { name }
        </p>
        <p id="quantity" data-testid="shopping-cart-product-quantity">
          { quantity }
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.addQuantity }
          >
            +
          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.removeQuantity }
          >
            -
          </button>
          <button
            type="button"
            onClick={ this.removeProduct }
          >
            X
          </button>
        </p>
      </div>
    );
  }

  render() {
    const zero = 0;
    const { quantity } = this.state;
    return (
      quantity > zero ? this.renderProduct() : ''
    );
  }
}

ProductInCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    quantityInCart: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductInCart;
