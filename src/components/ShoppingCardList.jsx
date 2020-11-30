import React, { Component } from 'react';
import './ShoppingCardList.css';

class ShoppingCardList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((item) => (
          <div key={ item.id } className="product-container">
            <img className="thumbnail" src={ item.thumbnail } alt="Imagem do produto" />
            <div className="product-content">
              <div>
                <span> Nome do Item: </span>
                <span>{item.title}</span>
              </div>
              <div>
                <span> Preço unitário: R$ </span>
                <span>{item.price}</span>
                <span> Quantidade: </span>
                <span>{item.quantity}</span>
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

export default ShoppingCardList;
