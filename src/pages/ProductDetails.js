import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartButton from '../components/ShoppingCartButton';

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.saveItemsFromDetail = this.saveItemsFromDetail.bind(this);
  }

  saveItemsFromDetail(item) {
    if (!localStorage.length) {
      localStorage.setItem('items',
        JSON.stringify([{
          sku: item.id,
          name: item.title,
          cost: item.price,
          quantity: item.available_quantity,
          image: item.thumbnail,
        }]));
      return;
    }
    const objectValues = JSON.parse(localStorage.getItem('items'));
    localStorage.setItem('items',
      JSON.stringify([...objectValues, {
        sku: item.id,
        name: item.title,
        cost: item.price,
        quantity: item.available_quantity,
        image: item.thumbnail,
      }]));
  }

  render() {
    const { location: { state: { item } } } = this.props;
    return (
      <div>
        <header className="page-header">
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
          {item.title}
        </div>

        <img src={ item.thumbnail } alt={ item.title } />
        <p>
          Especificações do produto...
        </p>
        <button
          type="button"
          onClick={ () => this.saveItemsFromDetail(item) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
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
