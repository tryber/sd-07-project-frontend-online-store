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
          <label htmlFor={ item.id } key={ item.id } className="category-item">
            {item.name}
            <input
              type="radio"
              data-testid="category"
              name="categoryId"
              value={ item.id }
              onClick={ (event) => this.filterCategory(event) }
            />
          </label>
        ))}
      </div>
    );
  }
}

export default CategoryList;
