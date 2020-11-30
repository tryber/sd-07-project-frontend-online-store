import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartButton from '../components/ShoppingCartButton';

export default class ProductDetails extends Component {
  render() {
    const { location: { state: { item } } } = this.props;
    return (
      <div>
        <header>
          <Link to="/">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4
              4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707
              8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </Link>
          <ShoppingCartButton />
        </header>

        <div data-testid="product-detail-name">
          { item.title }
        </div>

        <img src={ item.thumbnail } alt={ item.title } />
        <p>
          Especificações do produto...
        </p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
