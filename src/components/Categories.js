import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as categoryAPI from '../services/api';
import Loading from './Loading';

class Categories extends Component {
  constructor(props) {
    super(props);
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
    const { handleChangeCategory } = this.props;
    if (loading) return <Loading />;

    return (
      <div>
        <h3>Categorias</h3>
        <ul>
          {categories
            .map(({ id, name }) => (
              <li key={ id }>
                <input
                  type="radio"
                  id={ id }
                  value={ id }
                  name="category"
                  data-testid="category"
                  onChange={ (event) => handleChangeCategory(event) }
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

Categories.propTypes = { handleChangeCategory: PropTypes.func.isRequired };

export default Categories;
