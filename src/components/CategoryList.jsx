import React, { Component } from 'react';
import * as api from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    this.fetchCategory();
  }

  async fetchCategory() {
    const category = await api.getCategories();
    this.setState({ category });
  }

  async filterCategory(event) {
    const { handleChange, handleClick } = this.props;
    await handleChange(event);
    handleClick(event);
  }

  render() {
    const { category } = this.state;
    return (
      <div className="category-list">
        {category.map((item) => (
          <input
            type="button"
            data-testid="category"
            name="categoryId"
            value={ item.id }
            key={ item.id }
            className="category-item"
            onClick={ (event) => this.filterCategory(event) }
          />

        ))}
      </div>
    );
  }
}

export default CategoryList;
