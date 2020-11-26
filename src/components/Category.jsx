import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() { this.fetchCategories(); }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  mapCategories() {
    return this.state.categories.map(
      ({ id, name }) => <li key={ id } data-testid="category" id={ id }>{name}</li>,
    );
  }

  render() {
    return (
      <aside>
        <ul>
          {this.mapCategories()}
        </ul>
      </aside>
    );
  }
}

export default Category;
