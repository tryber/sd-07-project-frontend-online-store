import React from 'react';
import ItemCategory from './ItemCategory';

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
    this.setState({
      categories: [...requestResponse],
    });
  }

  render() {
    return (
      <div>
        {this.state.categories.map(
          (category) => <ItemCategory key={ category.id } category={ category } />,
        )}
      </div>
    );
  }
}

export default CategoryList;
