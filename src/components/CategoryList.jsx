import React from 'react';
import * as api from '../services/api'

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
    return (
      <div>
        {categories.map((category) => {
          return (
            <label key={category.id} htmlFor="">
              <input
                type="checkbox"
                name={category.name}
                value={category.name}
              />
              {category.name}
            </label>
          )}
        )}
      </div>
    );
  }
}

export default CategoryList;
