import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

export default class ProductList extends Component {
  render() {
    const { results } = this.props;
    return (
      <div>
        {results.map(({ title, thumbnail, price, id }) => (
          <Product
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
            key={ id }
            id={ id }
          />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,

};
