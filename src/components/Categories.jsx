import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.get.bind(this);
    this.state = {
      categories: [],
      carregado: false,
    };
  }

  componentDidMount() {
    this.get();
  }

  async get() {
    const categories = await api.getCategories();
    this.setState({ categories, carregado: true });
  }

  render() {
    const { onChange } = this.props;
    return (
      (this.state.carregado) ?
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
      </div> : <h1>carregando</h1>
    );
  }
}

export default Categories; 