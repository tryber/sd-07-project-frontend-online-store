import React, { Component } from 'react';
import CategorieCard from './CategorieCard';

import * as API from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    const allCategories = async () => {
      const list = await API.getCategories();
      this.setState({ categories: list });
    };
    allCategories();
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="category-list">
        {
          categories.map((category) => (<CategorieCard
            key={ category.id }
            category={ category }
          />))
        }
      </div>
    );
  }
}

export default CategoryList;
