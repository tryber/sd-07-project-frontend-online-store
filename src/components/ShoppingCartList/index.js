import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuantityControl from '../QuantityControl';
import * as lsapi from '../../services/lsapi';
import './ShoppingCartList.css';

class ShoppingCartList extends Component {
  constructor(props) {
    super(props);
    this.updateCartList = this.updateCartList.bind(this);
  }

  updateCartList({ product, quantity }) {
    if (product) {
      lsapi.updateShoppingCartList(product, quantity);
      const { handleChange } = this.props;
      handleChange();
    }
  }

  render() {
    const { purchasedProducts, hiddenbuttons = false } = this.props;
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return (
      <div className="cart-list-content">
        {purchasedProducts.length
          ? purchasedProducts.map(({ product, quantity }) => (
            <div className="cart-list-item" key={ product.id }>
              {
                !hiddenbuttons && (
                  <button
                    type="button"
                    onClick={ () => this.updateCartList({ product, quantity: 0 }) }
                  >
                    X
                  </button>)
              }
              <img src={ product.thumbnail } alt="Imagem do produto" />
              <div
                className="cart-list-item-title"
                data-testid="shopping-cart-product-name"
              >
                { product.title }
              </div>
              { !hiddenbuttons
                && <QuantityControl
                  item={ { product, quantity } }
                  handleClick={ this.updateCartList }
                /> }
              <div
                className="cart-list-item-price"
              >
                { formatter.format(product.price * quantity) }
              </div>
            </div>
          )) : (
            <div data-testid="shopping-cart-empty-message">
              <span>Seu carrinho está vazio</span>
            </div>
          ) }
      </div>
    );
  }
}

ShoppingCartList.propTypes = {
  purchasedProducts: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
  hiddenbuttons: PropTypes.bool,
};

ShoppingCartList.defaultProps = {
  hiddenbuttons: false,
};

export default ShoppingCartList;
