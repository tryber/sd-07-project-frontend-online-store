import React from 'react';
import * as api from '../services/api';

export default class CategoryList extends React.Component {
  constructor() {
    super();
    this.getCategoryProducts = this.getCategoryProducts.bind(this);
    this.state = {
      products: [],
      category: '',
      categoryId: '',
      query: ''
    }
  }

  async getCategoryProducts() {
    const { id } = this.props;
    const { query } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(id, query);
    this.setState({
      products: products.results,
    });
    console.log(this.state.products)
    if (this.props.onLoadProducts) {
      this.props.onLoadProducts(products.results);
    }
  }

  async getCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { id, category } = this.props;
    return (
      <div className="category">
        <li
          data-testid="category"
          key={ id }
          onClick={ this.getCategoryProducts }
        >
          { category }
        </li>
      </div>
    );
  }
}
