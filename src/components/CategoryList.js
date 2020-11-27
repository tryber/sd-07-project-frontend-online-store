import PropTypes from 'prop-types';
import React from 'react';

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
    const { handleCategory: sendCategoryId } = this.props;
    this.setState({ selectedCategoryId: id });
    sendCategoryId(id);
  }

  async fetchCategoryList() {
    const requestResponse = await productsAPI.getCategories();
    console.log(requestResponse);
    this.setState({
      categories: requestResponse,
    });
  }

  render() {
    const { categories, selectedCategoryId } = this.state;

    return (
      <div>
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

CategoryList.propTypes = { handleCategory: PropTypes.func.isRequired };

export default CategoryList;
