import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import ProductCard from '../ProductCard';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <ul>
        {products.length
          ? products.map((product) => (
            <li
              key={ product.id }
              data-testid="product"
            >
              <h3 data-testid="product-detail-name">{ product.title }</h3>
              <img src={ product.thumbnail } alt="Product" />
              <p>{ product.price }</p>
              <Link
                data-testid="product-detail-link"
                to={ {
                  pathname: '/productdetail',
                  state: { product },
                } }
              >
                Mais Detalhes
              </Link>
            </li>
          )) : (<li> Nenhum produto foi encontrado </li>)}
      </ul>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ProductList;
