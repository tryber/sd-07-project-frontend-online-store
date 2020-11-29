import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class FiltersCategory extends React.Component {
  constructor() {
    super();

    this.state = {
      apiCategories: [],
    };

    this.requestCategoryApi = this.requestCategoryApi.bind(this);
  }

  componentDidMount() {
    this.requestCategoryApi();
  }

  async requestCategoryApi() {
    const categories = await api.getCategories();
    this.setState({ apiCategories: categories });
  }

  render() {
    const { apiCategories } = this.state;
    const { getCategory } = this.props;
    return (
      <aside className="side-bar">
        <h3>Categorias:</h3>
        {apiCategories.map((category) => (
          <div key={ category.id } className="container-filters" data-testid="category">
            <input
              type="radio"
              name="categories"
              id={ category.id }
              data-testid="category"
              onChange={ getCategory }
            />
            <label htmlFor={ category.id }>{ category.name }</label>
          </div>))}
      </aside>
    );
  }
}

FiltersCategory.propTypes = {
  getCategory: PropTypes.func.isRequired,
};

export default FiltersCategory;
