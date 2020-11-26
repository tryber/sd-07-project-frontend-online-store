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

  async fetchCategoryList() {
    const requestResponse = await productsAPI.getCategories();
    console.log(requestResponse);
    this.setState({
      categories: requestResponse,
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
