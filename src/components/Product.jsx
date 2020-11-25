import React from 'react';

class Product extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <img src={thumbnail} alt=""/>
        <p>R${price}</p>
      </div>
    )
  }
}

export default Product;