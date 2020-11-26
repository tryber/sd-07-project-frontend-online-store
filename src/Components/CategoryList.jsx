import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../services/api';

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.fetchAPI = this.fetchAPI.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const result = await API.getCategories();
    this.setState({
      categories: result,
    });
  }

  render() {
    const { categories } = this.state;
    const { clickChange } = this.props;
    return (
      <div>
        <span>Categorias</span>
        <ul>
          {categories.map((category) => (
            <button
              onClick={ () => clickChange(category.name) }
              type="button"
              data-testid="category"
              key={ category.id }
            >
              {category.name}
            </button>
          ))}
        </ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  clickChange: PropTypes.func.isRequired,
};

export default CategoryList;
