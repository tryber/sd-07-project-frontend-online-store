import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';


class ProductsList extends React.Component {
  render() {
    const { products } = this.props;

    if (!products.length) {
      return (
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      );
    }

    return (
      <div>
        {
          products.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))
        }
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsList;
