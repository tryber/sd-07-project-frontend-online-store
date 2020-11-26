import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class Products extends React.Component {
  render() {
    const { products } = this.props;
    const { results } = products;
    if (results) {
      return (
        <div>
          {results.map((result) => <ProductCard key={ result.id } product={ result } />)}
        </div>
      );
    }
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Products;
