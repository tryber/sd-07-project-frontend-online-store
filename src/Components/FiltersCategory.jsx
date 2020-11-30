import React from 'react';
import * as api from '../services/api';

class FiltersCategory extends React.Component {
  constructor() {
    super();

    this.requestCategoryApi = this.requestCategoryApi.bind(this);

    this.state = {
      apiCategories: [],
    };
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
          <div key={ category.id } className="container-filters">
            <input
              type="radio"
              name="categories"
              id={ category.id }
              data-testid="category"
            />
            <label htmlFor={ category.id }>{ category.name }</label>
          </div>))}
      </aside>
    );
  }
}

export default FiltersCategory;
