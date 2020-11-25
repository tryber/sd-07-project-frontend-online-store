import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.get.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.get();
  }

  async get() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { onChange } = this.props;
    return (
      <div>
        <h2>Categorias</h2>
        {this.state.categories.map((category) =>
          <div key={category.name}>
            <input
              id={category.name}
              type="radio"
              name="category"
              value={category.name}
              onChange={onChange}
            />
            <label data-testid="category" htmlFor={category.name}>{category.name}</label>
          </div>
        )}
      </div>
    );
  }
}

export default Categories; 