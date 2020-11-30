import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import * as api from '../services/api';

export default class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.setCategories = this.setCategories.bind(this);
    this.onLoadProducts = this.onLoadProducts.bind(this);
  }

  componentDidMount() {
    this.setCategories();
  }

  async onLoadProducts(products = []) {
    const { onLoadProducts } = this.props;
    if (onLoadProducts) {
      onLoadProducts(products);
    }
  }

  async setCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="category-list">
        <div>
          <h1>Categorias</h1>
          {categories.map((category) => (
            <CategoryItem
              key={ category.id }
              id={ category.id }
              category={ category.name }
              onLoadProducts={ this.onLoadProducts }
            />))}
        </div>
      </div>
    );
  }
}

CategoryList.propTypes = {
  onLoadProducts: PropTypes.func.isRequired,
};
