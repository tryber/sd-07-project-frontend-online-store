import React from 'react';
import PropTypes from 'prop-types';

import { getCategories } from '../services/api';

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
    const { selectCategory } = this.props;
    const { categories } = this.state;

    const notCategoriesLength = 0;

    if (categories.length === notCategoriesLength) {
      return <div>Carregando</div>;
    }

    return (
      <div>
        <h3>Categorias</h3>

        <ul>
          {categories.map(({ id, name }) => (
            <li key={ id }>
              <label htmlFor={ id } data-testid="category">
                {name}
                <input
                  onChange={ selectCategory }
                  type="radio"
                  name="category"
                  id={ id }
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  selectCategory: PropTypes.func.isRequired,
};

export default Categories;
