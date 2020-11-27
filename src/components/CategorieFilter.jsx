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
      <div className="category-filter">
        {categories.map((categorie) => (
          <div className="categorie-item" key={categorie.id}>
            <label htmlFor={categorie.id}>
              {categorie.name}
              <input
                type="radio"
                data-testid="category"
                name="categoryId"
                value={categorie.id}
                onChange={updateValueCategory}
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
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  updateValueCategory: PropTypes.func.isRequired,
};
