import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { Link } from 'react-router-dom';


export default class ProductList extends Component {
  render() {
    const { results } = this.props;
    const { product } = this.props;

    return (
      <div>
        {results.map(({ title, thumbnail, price, id }) => (
          <Product title={ title } thumbnail={ thumbnail } price={ price } key={ id } />
        ))}
              <h1 data-testid="product-detail-name">{ product }</h1>
              <img src={ product.thumbnail } alt="Products" />
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
