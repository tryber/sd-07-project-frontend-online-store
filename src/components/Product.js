import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ thumbnail } alt="thumb" />
        <p>{price}</p>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
