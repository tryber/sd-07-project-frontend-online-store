import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as cartApi from '../services/localStorage';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      feedback: '',
      evaluation: 0,
    };

    this.handleMessage = this.handleMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.fetchProduct(id);
  }

  handleMessage({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  onSubmit() {
    const { product, evaluation, feedback } = this.state;
    product.evaluation = evaluation;
    product.feedback = feedback;
    cartApi.addToCart(product);
  }

  async fetchProduct(id) {
    const { feedback, evaluation } = this.state;
    const endpoint = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(endpoint);
    const fetchedProduct = await response.json();
    this.setState({ product: { ...fetchedProduct, feedback, evaluation } });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <div className="details">
        <Link
          data-testid="shopping-cart-button"
          className="cartButton"
          to="/pages/shopping-cart"
        >
          Carrinho
          <span
            className="cart-quantity"
            data-testid="shopping-cart-size"
          >
            {cartApi.showQuantInCart()}
          </span>
        </Link>
        <div data-testid="product-detail-name">
          <h4>{ title }</h4>
          <p>{ price }</p>
          <img src={ thumbnail } alt={ `${title}` } />

          <div className="rating">
            <textarea
              type="text"
              name="feedback"
              id="feedback-input"
              data-testid="product-detail-evaluation"
              onChange={ this.handleMessage }
            />
            <br />
            <input
              type="number"
              name="evaluation"
              id="evaluation-input"
              onChange={ this.handleMessage }
              max="5"
              required
            />
          </div>
          <button
            type="button"
            onClick={ () => { this.onSubmit(); } }
          >
            Salvar
          </button>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => cartApi.addToCart(product) }
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
