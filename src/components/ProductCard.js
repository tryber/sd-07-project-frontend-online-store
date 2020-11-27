import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => {
          const { id, title, thumbnail, price } = product;
          return (
            <div
              key={ id }
              data-testid="product"
            >
              <h2>{ title }</h2>
              <img src={ thumbnail } alt="products" />
              <p>{ price }</p>
            </div>
          );
          })}
      </div>
    );
  }
}

export default ProductCard;