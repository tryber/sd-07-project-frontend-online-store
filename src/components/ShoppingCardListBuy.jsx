import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShoppingCardList.css';

class ShoppingCardListBuy extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <h3>Revise seus produtos</h3>
        {products.map((item) => (
          <div key={ item.id } className="product-container">
            <img className="thumbnail" src={ item.thumbnail } alt="Imagem do produto" />
            <div className="product-content">
              <div>
                <span> Nome do Item: </span>
                <span data-testid="shopping-cart-product-name">{item.title}</span>
              </div>
              <div>
                <span> Preço unitário: R$ </span>
                <span>{item.price}</span>
                <span> Quantidade: </span>
                <span data-testid="shopping-cart-product-quantity">{item.quantity}</span>
                <span> Preço total: R$ </span>
                <span>{item.price * item.quantity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCardListBuy.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCardListBuy;
