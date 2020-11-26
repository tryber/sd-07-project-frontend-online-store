import React, { Component } from "react";
import * as api from '../services/api';

import PropTypes from "prop-types";

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      feedback: "",
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

  async fetchProduct(id) {
    const { feedback, evaluation } = this.state;
    const endpoint = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(endpoint);
    const fetchedProduct = await response.json();
    this.setState({ product: {...fetchedProduct, feedback, evaluation} });
  }

  handleMessage({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  onSubmit() {
    const { product, feedback, evaluation } = this.state;
    api.addToCartFromDetails(product, evaluation, feedback);
  }

  render() {

    const { product } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <div className="product-details" data-testid="product-detail-name">
        <h1>{title}</h1>
        <h2>{price}</h2>
        <img src={thumbnail} alt={`${title}`} />
        <div className="rating">
          <textarea
            type="text"
            name="feedback"
            id="feedback-input"
            data-testid="product-detail-evaluation"
            onChange={this.handleMessage}
          ></textarea>

          <input
            type="number"
            name="evaluation"
            id="evaluation-input"
            onChange={this.handleMessage}
            max="5"
            required
          />
        </div>
        <button>Salvar</button>
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
