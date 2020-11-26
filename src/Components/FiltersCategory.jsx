import React from 'react';
import * as api from '../services/api';

class FiltersCategory extends React.Component {
  constructor() {
    super();

    this.state = {
      apiCategories: [],
    };

    this.requestCategoryApi = this.requestCategoryApi.bind(this);
  }

  componentDidMount() {
    this.requestCategoryApi();
  }

  async requestCategoryApi() {
    const categories = await api.getCategories();
    this.setState({ apiCategories: categories });
  }

  render() {
    const { apiCategories } = this.state;
    return (
      <aside className="side-bar">
        <h3>Categorias:</h3>
        {apiCategories.map((category) => (
          <div key={ category.id } className="container-filter" data-testid="category">
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
