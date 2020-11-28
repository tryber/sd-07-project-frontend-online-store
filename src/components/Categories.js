import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { categories } = this.state;
    return (
      <div className="pesquisa">
        <h2>Categorias</h2>
        <div className="catop">
          <label htmlFor="semcategoria">
            <input
              type="radio"
              id="semcategoria"
              name="category"
              value=""
              onChange={ onChange }
            />
            Sem categoria
          </label>
        </div>
        {categories.map((category) => (
          <div className="catop" key={ category.name }>
            <input
              id={ category.name }
              type="radio"
              name="category"
              value={ category.id }
              onChange={ onChange }
            />
            <label
              data-testid="category"
              htmlFor={ category.name }
            >
              {category.name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Categories;
