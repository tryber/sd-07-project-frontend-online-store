import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductReview from '../components/ProductReview';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.fetchProduct(id);
  }

  async fetchProduct(id) {
    const endpoint = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(endpoint);
    const fetchedProduct = await response.json();
    this.setState({ product: fetchedProduct });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product-detail-name">
        <h1>{ title }</h1>
        <h2>{ price }</h2>
        <img src={ thumbnail } alt="Imagem do produto" />
        <ProductReview />
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

export default ProductDetails;
