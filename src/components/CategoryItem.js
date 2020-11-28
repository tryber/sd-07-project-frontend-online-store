import React from 'react';
import PropType from 'prop-types';
import * as api from '../services/api';

export default class CategoryList extends React.Component {
  constructor() {
    super();
    this.getCategoryProducts = this.getCategoryProducts.bind(this);
    this.state = {
      query: '',
    };
  }

  async getCategoryProducts() {
    const { id, onLoadProducts } = this.props;
    const { query } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(id, query);
    if (onLoadProducts) {
      onLoadProducts(products.results);
    }
  }

  render() {
    const { id, category } = this.props;
    return (
      <div className="category">
        <li
          data-testid="category"
          key={ id }
          onClick={ this.getCategoryProducts }
          role="presentation"
        >
          { category }
        </li>
      </div>
    );
  }
}

CategoryList.propType = {
  getCategoryProducts: PropType.func,
};
