import React from 'react';

import { Link } from 'react-router-dom';

import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const response = await getCategories();
    this.setState({ categories: response });
  }

  render() {
    const { categories } = this.state;

    const notCategoriesLength = 0;

    if (categories.length === notCategoriesLength) {
      return <div>Carregando</div>;
    }

    return (
      <div>
        <h3>Categorias</h3>

        <ul>
          {categories.map(({ id, name }) => (
            <li key={ id }>
              <Link data-testid="category" to={ `category/${id}` }>{ name }</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
