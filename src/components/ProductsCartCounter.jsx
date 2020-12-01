import React from 'react';
import PropTypes from 'prop-types';

class ProductsCartCounter extends React.Component {
  render() {
    const { counter } = this.props;
    return (
      <div className="shopping-cart-size" data-testid="shopping-cart-size">
        { counter }
      </div>
    );
  }
}

ProductsCartCounter.propTypes = {
  counter: PropTypes.number,
}.isRequired;

export default ProductsCartCounter;
