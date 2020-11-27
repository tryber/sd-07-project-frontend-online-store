import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

class ProductsList extends Component {
  render() {
    const { products } = this.props;
    if (products.length < 1) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <div>
        { products.map((prod) => <ProductCard key={ prod.id } prod={ prod } />)}
      </div>
    );
  }
}

ProductsList.propTypes = { products: PropTypes.arrayOf(PropTypes.object).isRequired };

export default ProductsList;
