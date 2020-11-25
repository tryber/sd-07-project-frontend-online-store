import React, { Component } from 'react';
import * as api from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
  }

  async componentDidMount() {
    const category = await api.getCategories();
    this.setState({ category });
  }

  render() {
    const { category } = this.state;
    return (
      <div className="category-list">
        {category.map((item) => (
          <div
            data-testid="category"
            key={ item.id }
            className="category-item"
            onClick={ () => console.log(item.id) }
            role="presentation"
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

export default CategoryList;
