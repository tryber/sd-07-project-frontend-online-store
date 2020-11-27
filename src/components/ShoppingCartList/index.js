import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCartList extends Component {
  render() {
    const { purchasedProducts } = this.props;
    return (
      <div className="cart-list-content">
        {purchasedProducts.length
          ? purchasedProducts.map(({ product, quantity }) => (
            <div className="cart-list-item" key={ product.id }>
              <p>
                Código:
                { product.id }
              </p>
              <img src={ product.thumbnail } alt="Imagem do produto" />
              <p data-testid="shopping-cart-product-name">
                Produto:
                { product.title }
              </p>
              <p data-testid="shopping-cart-product-quantity">
                Quantidade:
                { quantity }
              </p>
              <p>
                Valor:
                { product.price }
              </p>
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
};

export default ShoppingCartList;
