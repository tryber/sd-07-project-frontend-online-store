import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.fetchCategory = this.fetchCategory.bind(this);
    this.filterCategory = this.filterCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategory();
  }

  async fetchCategory() {
    const RequestReturn = await api.getCategories();
    this.setState({
      categories: RequestReturn,
    });
  }

  async filterCategory(event) {
    const { handleSearchChange, handleClickChange } = this.props;
    await handleSearchChange(event);
    handleClickChange(event);
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category) => (
          <div>
            <input
              type="checkbox"
              data-testid="category"
              id={ category.id }
              name="categoryId"
              value={ category.id }
              key={ category.id }
              onClick={ (event) => this.filterCategory(event) }
            />
            <label htmlFor={ category.id }>{ category.name }</label>
          </div>
        ))}
      </div>
    );
  }
}

Category.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  handleClickChange: PropTypes.func.isRequired,
};

export default Category;
