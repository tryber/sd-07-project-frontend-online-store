import React from 'react';

import * as productsAPI from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.fetchCategoryList = this.fetchCategoryList.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategoryList();
  }

  fetchCategoryList() {
    productsAPI.getCategories().then((data) => {
      this.setState({
        categories: [...data],
      });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map(
          (category) => (
            <div data-testid="category" key={ category.id }>
              { category.name }
            </div>),
        )}
      </div>
    );
  }
}

export default CategoryList;
