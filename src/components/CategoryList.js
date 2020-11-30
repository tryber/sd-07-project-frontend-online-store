import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.apiRequisition = this.apiRequisition.bind(this);
  }

  componentDidMount() {
    this.apiRequisition();
  }

  apiRequisition() {
    api.getCategories().then((listOfCategories) => {
      this.setState({
        categories: listOfCategories,
      });
    });
  }

  render() {
    const { categories } = this.state;
    const { handleClickCategory } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <label
            key={ category.id }
            htmlFor={ category.name }
          >
            <input
              data-testid="category"
              id={ category.name }
              type="radio"
              name="category"
              value={ category.id }
              onClick={ handleClickCategory }
            />
            { category.name }
          </label>
        ))}
      </div>
    );
  }
}

export default CategoryList;

CategoryList.propTypes = {
  handleClickCategory: PropTypes.func.isRequired,
};
