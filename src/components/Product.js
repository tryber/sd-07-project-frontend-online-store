import React from 'react';

class Product extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <div data-testid="product" className="product">
        <p>{product.title}</p>
        <img src={product.thumbnail} />
        <p>{`R$ ${product.price}`}</p>
      </div>
    );
  }
}

export default Product;
