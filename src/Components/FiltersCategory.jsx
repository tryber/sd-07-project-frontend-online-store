import React from 'react';
import * as api from '../services/api';

class FiltersCategory extends React.Component {
  constructor() {
    super();

    this.state = {
      apiCategories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ apiCategories: categories }));
  }

  render() {
    const { apiCategories } = this.state;
    return (
      <aside className="side-bar">
        <h3>Categories:</h3>
        {apiCategories.map((category) => (
          <div key={ category.id }>
            <input
              type="radio"
              name="categories"
              id={ category.id }
              onClick={ this.handleClick }
              data-testid="category"
            />
            <label htmlFor={ category.id }>{ category.name }</label>
          </div>))}
      </aside>
    );
  }
}

export default FiltersCategory;
