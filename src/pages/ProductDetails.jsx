import React from 'react';

class ProductDetails extends React.Component {

  render() {
    const { item } = this.props.location.product;
    return (
      <div>
        <h1 data-testid="product-detail-name" >{item.title}</h1>
      </div>
    )
  }
}

export default ProductDetails;