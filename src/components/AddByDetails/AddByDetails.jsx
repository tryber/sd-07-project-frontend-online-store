import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as cartStorage from '../../services/cartStorage';

class AddByDetails extends Component {
  constructor(props) {
    super(props);

    this.addCart = this.addCart.bind(this);
  }

  addCart() {
    const productsInCart = JSON.parse(localStorage.getItem('cart')) || [];
    const { productSelected } = this.props;
    const newProducts = [...productsInCart, productSelected];
    cartStorage.addToCart(newProducts);
  }

  render() {
    return (
      <div>
        <button
          onClick={ this.addCart }
          type="button"
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

AddByDetails.propTypes = { productSelected: PropTypes.shape({}).isRequired };

export default AddByDetails;
