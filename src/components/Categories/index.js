import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { getCategories } from '../../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const response = await getCategories();
    this.setState({ categories: response });
  }

  render() {
    const { selectCategory, color } = this.props;
    const { categories } = this.state;

    const notCategoriesLength = 0;

    if (categories.length === notCategoriesLength) {
      return <div>Carregando</div>;
    }
    return (
      <div className="categories-container">
        <h2 className="categories-title">Categorias</h2>
        <ul className="list">
          {categories.map(({ id, name }) => (
            <li key={ id } className="item">
              <button
                id={ id }
                type="button"
                className="category-button"
                onClick={ selectCategory }
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  selectCategory: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Categories;
