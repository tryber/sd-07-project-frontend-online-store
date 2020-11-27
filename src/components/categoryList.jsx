import React, { Component } from 'react';
import * as api from '../services/api';
import CategoryItems from './categorysItems';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.fetchCategory = this.fetchCategory.bind(this);
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

  render() {
    const { categories } = this.state;
    const { handleSearchChange } = this.props;
    return (
      <div>
        {categories.map((category) =>
        <CategoryItems
          key={ category.name }
          category={ category }
          handleSearchChange={ handleSearchChange }
        />)}
      </div>
    );
  }
}

export default Category;
