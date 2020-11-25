import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { title, thumbnail, price } = this.props.product;
    return (
      <div>
        <div>
          <img alt="Products" src={ thumbnail } />
          <div>
            <h4>
              {title}
            </h4>
            <h5>{price}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
