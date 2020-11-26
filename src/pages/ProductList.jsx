import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    const { title, image, price } = this.props;

    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={image} alt="" />
        <p>{price}</p>
      </div>
    );
  }
}

export default ProductList;
