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

  fetchCategoryList() {
    this.setState({
      categories: productsAPI.getCategories(),
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        {categories.map(
          (category) => <ItemCategory key={ category.id } category={ category } />,
        )}
      </div>
    );
  }
}

export default CategoryList;
