import React, { Component } from 'react';
import * as categoryAPI from '../services/api';

import Loading from './Loading';

class Categories extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);

    this.state = {
      loading: true,
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.setState({ loading: true },
      async () => {
        const categoriesRet = await categoryAPI.getCategories();
        this.setState({ categories: categoriesRet, loading: false });
      });
  }

  render() {
    const { categories, loading } = this.state;

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
                  id={ id }
                  name="category"
                  data-testid="category"
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

export default Categories;
