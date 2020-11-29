import React, { Component } from 'react';
import * as api from '../services/api';


class ListCategories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ categories }))
      .catch((err) => console.log(err));
  }

  render() {
    const { onClickCategory } = this.props;
    const { categories } = this.state;

    return (
      <section className="category-wrapper">
        {categories.map((category) => {
          return (
            <div
              className="category-input"
              key={ category.id }
            >
              <label
                htmlFor={ category.id }
              >
                { category.name }
              </label>
              <input
                onClick={ onClickCategory }
                id={ category.id }
                type="radio"
                name="category"
                data-testid="category"
              />
            </div>
          );
        })},
      </section>

    );
  }
}

export default ListCategories;
