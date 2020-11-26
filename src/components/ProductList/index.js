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
          ? products.map(({ id, title, thumbnail, price }) => (
            <li
              key={ id }
              data-testid="product"
            >
              <h3 data-testid="product-detail-name">{ title }</h3>
              <img src={ thumbnail } alt="Product" />
              <p>{ price }</p>
              <Link
                data-testid="product-detail-link"
                to="/productdetail"
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
