import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

export default class ProductList extends Component {
  render() {
    const { results, category, searchKey, updateCartTotal } = this.props;
    return (
      <div className="div-prod-list">
        {results.map(({ title,
          thumbnail,
          price,
          id,
          available_quantity: availableQuantity,
          shipping,
        }) => (
          <Product
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
            key={ id }
            id={ id }
            category={ category }
            searchKey={ searchKey }
            updateCartTotal={ updateCartTotal }
            availableQuantity={ availableQuantity }
            freeShipping={ shipping.free_shipping }
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
  category: PropTypes.string,
  searchKey: PropTypes.string.isRequired,
  updateCartTotal: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  category: undefined,
};
