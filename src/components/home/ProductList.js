import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ProductList.css';

class ProductList extends React.Component {
  render() {
    const { query, api, num } = this.props;
    const products = api;
    if (api.results.length < 1) {
      return (
        <div>
          <p>Nenhum produto foi encontrado</p>
        </div>
      );
    }
    return (
      <div className="productList">
        {products.results.map((prod) => (<ProductCard
          num={ num }
          query={ query }
          key={ prod.id }
          product={ prod }
        />)) }
      </div>
    );
  }
}

ProductList.propTypes = {
  query: PropTypes.string.isRequired,
  api: PropTypes.objectOf(PropTypes.array).isRequired,
  num: PropTypes.number.isRequired,
};

export default ProductList;
