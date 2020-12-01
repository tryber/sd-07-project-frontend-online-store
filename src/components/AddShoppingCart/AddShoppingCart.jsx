import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProducts: [],
    };

    this.addCartItem = this.addCartItem.bind(this);
  }

  addCartItem() {
    const { product } = this.props;
    const previousProducts = JSON.parse(localStorage.getItem('cart')) || [];
    const findProduct = previousProducts.find((SCproduct) => SCproduct.id === product.id);
    const newProduct = {
      key: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      id: product.id,
      price: product.price,
      quantity: 1,
    };

    if (!findProduct) {
      previousProducts.push(newProduct);
    } else {
      findProduct.quantity += 1;
    }

    this.setState(
      () => ({ listProducts: previousProducts }),
      () => {
        const { listProducts } = this.state;
        localStorage.setItem('cart', JSON.stringify(listProducts));
      },
    );
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.addCartItem }
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

AddShoppingCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired };

export default AddShoppingCart;
