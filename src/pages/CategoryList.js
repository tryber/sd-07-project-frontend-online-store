import React from 'react';
import PropType from 'prop-types';
import * as api from '../services/api';

export default class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryId: '',
      categories: [],
    };
    this.setCategories = this.setCategories.bind(this);
    this.getCategoryId = this.getCategoryId.bind(this);
  }

  componentDidMount() {
    this.setCategories();
  }

  async setCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  getCategoryId(categoryId) {
    const { fetchByCategory } = this.props;
    this.setState({ categoryId },
      () => {
        const { state } = this;
        fetchByCategory(state.categoryId);
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <div>
          <h1>Categorias</h1>
          <ul>
            {categories.map((category) => (
              <li
                data-testid="category"
                key={ category.id }
                onClick={ () => { this.getCategoryId(category.id); } }
                aria-hidden="true"
              >
                { category.name }
              </li>))}
          </ul>
        </div>
      </div>
    );
  }
}

CategoryList.propTypes = {
  fetchByCategory: PropType.func.isRequired,
};
