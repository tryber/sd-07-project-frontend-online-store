import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddShoppingcart extends Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    this.state = {
      listProducts: [],
      product,
    };

    this.addCartItem = this.addCartItem.bind(this);
  }

  addCartItem() {
    const { product } = this.state;
    const previosProduts = JSON.parse(localStorage.getItem('cart')) || [];
    this.setState(
      () => ({ listProducts: [...previosProduts, product] }),
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

export default AddShoppingcart;

AddShoppingcart.propTypes = { product: PropTypes.shape({}).isRequired };
