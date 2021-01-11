import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class Products extends React.Component {
  render() {
    const empty = 0;
    const { products } = this.props;
    const { results } = products;
    // console.log(results);
    if (results) {
      if (results.length === empty) return <p>Nenhum produto foi encontrado</p>;
      return (
        <div className="product-content">
          {results.map((result) => <ProductCard key={ result.id } product={ result } />)}
        </div>
      );
    }
    return (
      <div className="initial-message">
        <p data-testid="home-initial-message" className="message">
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
