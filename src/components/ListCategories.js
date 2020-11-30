import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          const { id, name } = category;
          return (
            <div
              className="category-input"
              key={ id }
            >
              <label
                htmlFor={ id }
              >
                { name }
              </label>
              <input
                onClick={ onClickCategory }
                id={ id }
                type="radio"
                name="category"
                data-testid="category"
              />
            </div>
          );
        })}
      </section>
    );
  }
}

ListCategories.propTypes = {
  onClickCategory: PropTypes.func.isRequired,
};

export default ListCategories;
