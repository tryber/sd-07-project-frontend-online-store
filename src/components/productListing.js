import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Products from './Products';
import * as api from '../services/api';

class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.state = {
      products: [],
      categorySelected: '',
    };
  }

  componentDidUpdate() {
    const { categoryId } = this.props;
    const { categorySelected } = this.state;
    if (categoryId !== categorySelected) {
      this.getProducts();
    }
  }

  async getProducts() {
    const { categoryId } = this.props;
    const { searchText } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(
      categoryId,
      searchText,
    );
    this.setState({
      categorySelected: categoryId,
      products: response.results,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { products } = this.state;
    const { updateCartAmount } = this.props;
    return (
      <div>
        <input
          onChange={ this.handleChange }
          data-testid="query-input"
          className="search-category"
          type="text"
          name="searchText"
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          type="button"
          onClick={ this.getProducts }
          data-testid="query-button"
        >
          DISPARA API
        </button>
        <Products products={ products } updateCartAmount={ updateCartAmount } />
      </div>
    );
  }
}

export default ProductListing;

ProductListing.propTypes = {
  categoryId: PropTypes.string.isRequired,
  updateCartAmount: PropTypes.func.isRequired,
};
