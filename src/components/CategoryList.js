import React from 'react';
import ItemCategory from './ItemCategory';

import * as productsAPI from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.fetchCategoryList = this.fetchCategoryList.bind(this);
    this.radioHandler = this.radioHandler.bind(this);

    this.state = {
      categories: [],
      selectedCategoryId: '',
    };
  }

  componentDidMount() {
    this.fetchCategoryList();
  }

  radioHandler({ target: { id } }) {
    this.setState({ selectedCategoryId: id });
  }

  async fetchCategoryList() {
    const requestResponse = await productsAPI.getCategories();
    this.setState({
      categories: requestResponse,
    });
  }

  render() {
    const { categories, selectedCategoryId } = this.state;

    return (
      <div onChange={ this.radioHandler }>
        {categories.map((category) => (
          <ItemCategory
            onChange={ this.radioHandler }
            checked={ selectedCategoryId === category.id }
            key={ category.id }
            category={ category }
          />
        ))}
      </div>
    );
  }
}

export default CategoryList;
