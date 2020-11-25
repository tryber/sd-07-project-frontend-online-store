import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import { Loading } from './components';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: [],
      loading: false,
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    this.setState({ loading: true }, async () => {
      const id = this.props.match.params.id;
      const pegaproduct = await api.getProductsFromCategoryAndQuery();
      this.setState({ loading: false, product: pegaproduct });
    });
  }

  render() {
    const { loading, product } = this.state;
    const { name, quantity } = product;
    return (
      <div data-testid="movie-details">
        {loading ? (
          <Loading />
        ) : (
          <div className="movie-card-details" data-testid="product-detail-add-to-cart">
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p data-testid="shopping-cart-product-name" >{name}</p>
            <p data-testid="shopping-cart-product-quantity">{quantity}</p>
          </div>
        )}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default ProductDetails;
