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

  render() {
    const { category } = this.state;
    return (
      <div className="category-list" data-testid="category">
        <select onChange={ (event) => console.log(event.target.value) }>
          <option defaultValue value="" name="categoryId">Selecione uma categoria</option>
          {category.map((item) => (
            <option
              data-testid="category"
              name="categoryId"
              value={ item.id }
              key={ item.id }
              className="category-item"
            >
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default CategoryList;
