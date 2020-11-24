import React, { Component } from 'react';
import * as api from '../../services/api';
import categories from '../../__mocks__/categories';
// import categories from '../../__mocks__/categories';

class CategoryList extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);

    this.state = {
      categories: [],
    }
  }

  async fetchCategories() {
    const categoriesFromApi = await api.getCategories();
    
    this.setState ({
      categories: categoriesFromApi,
    });
  }

  componentDidMount() {
    this.fetchCategories();
  }

  render() {
    return (
      <div>
        {categories.map((item) => (
          <p data-testid="category" key={this.state.categories.id}>
            {this.state.categories.name}
          </p>
        ))}
      </div>
    );
  }
}

export default CategoryList;
