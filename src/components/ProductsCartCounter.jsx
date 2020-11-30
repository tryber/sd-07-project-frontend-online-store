import React from 'react';

class ProductsCartCounter extends React.Component {
  render() {
    const { counter } = this.props;
    return (
      <div className="shopping-cart-size" data-testid="shopping-cart-size">
        {counter}
      </div>
    )
  }
}

export default ProductsCartCounter;
