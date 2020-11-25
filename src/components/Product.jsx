import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <span>{title}</span>
        <img src={thumbnail} alt={title} />
        <span>{price}</span>
      </div>
    );
  }
}

export default Product;
