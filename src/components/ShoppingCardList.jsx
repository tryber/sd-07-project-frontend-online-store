import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShoppingCardList.css';
import Quantity from './Quantity';
import RemoveItem from './RemoveItem';

class ShoppingCardList extends Component {
  render() {
    const { products, changeQuantity, removeItem } = this.props;
    const decimals = 2;
    return (
      <div>
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
                <span>{(item.price).toFixed(decimals)}</span>
                <Quantity
                  quantity={ item.quantity }
                  changeQuantity={ changeQuantity }
                  id={ item.id }
                  available_quantity={item.available_quantity}
                />
                <RemoveItem
                  removeItem={ removeItem }
                  id={ item.id }
                />
                <span> Preço total: R$ </span>
                <span>{(item.price * item.quantity).toFixed(decimals)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCardList.propTypes = {
  changeQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCardList;
