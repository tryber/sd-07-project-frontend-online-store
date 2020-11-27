import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as categoryAPI from '../services/api';

import Loading from './Loading';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  // Fetch categories from API
  fetchCategories() {
    this.setState({ loading: true },
      async () => {
        const categoriesRet = await categoryAPI.getCategories();
        this.setState({ categories: categoriesRet, loading: false });
      });
  }

  render() {
    const { categories, loading } = this.state;
    const { callback } = this.props;

    if (loading) return <Loading />;

    return (
      <div className="categories">
        <h3>Categorias</h3>
        <ul>
          {categories
            .map(({ id, name }) => (
              <li key={ id }>
                <input
                  type="radio"
                  value={ id }
                  name="category"
                  data-testid="category"
                  onClick={ callback }
                />
                <label htmlFor={ id }>
                  { name }
                </label>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

Categories.propTypes = { callback: PropTypes.func.isRequired };

export default Categories;
