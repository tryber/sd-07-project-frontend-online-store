import React, { Component } from 'react';
import * as api from './services/api';

class CategoryList extends Component {
  constructor() {
    super();

    this.state = { categories: [] };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ categories }))
      .catch((err) => console.log(err));
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        <div>
          {categories.map((category) => (
            <label htmlFor="input-check" data-testid="category" key={ category.id }>
              <input id="input-check" type="checkbox" />
              {category.name}
            </label>
          ))}
        </div>
      </section>
    );
  }
}

export default CategoryList;
