import React, { Component } from 'react';
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
    const { handleCategoryChange } = this.props;

    return (
      <div>
        <span>Categorias</span>
        <form>
          {categories.map((category) => (
            <label
              htmlFor="category"
              key={ category.id }
            >
              <input
                name="category"
                value={ category.id }
                type="radio"
                data-testid="category"
                onClick={ handleCategoryChange }
              />
              {category.name}
            </label>
          ))}
        </form>
      </div>
    );
  }
}

export default CategoryList;
