import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class CategorieFilter extends React.Component {
  constructor() {
    super();

    this.FetchCategories = this.FetchCategories.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.FetchCategories();
  }

  async FetchCategories() {
    const result = await api.getCategories();
    this.setState({ categories: result });
  }

  render() {
    const { categories } = this.state;
    const { updateValueCategory } = this.props;
    return (
      <div>
        {categories.map((categorie) => (
          <div key={ categorie.id }>
            <label htmlFor={ categorie.id }>
              { categorie.name }
              <input
                type="radio"
                data-testid="category"
                name="categoryId"
                value={ categorie.id }
                onChange={ updateValueCategory }
              />
            </label>
          </div>
        ))}
      </div>
    );
  }
}

CategorieFilter.propTypes = {
  categorie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  updateValueCategory: PropTypes.func.isRequired,
};
