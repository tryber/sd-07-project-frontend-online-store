import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props.product;
    return (
      <div data-testid="product" key={this.props.id}>
        <h3>{title}</h3>
        <p>{price}</p>
        <img src={thumbnail} alt={title} />
      </div>
    );
  }
}

export default ProductCard;
