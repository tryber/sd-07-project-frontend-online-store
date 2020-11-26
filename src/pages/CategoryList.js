import React from 'react';
import * as api from '../services/api';

export default class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.setCategories = this.setCategories.bind(this);
  }

  componentDidMount() {
    this.setCategories();
  }

  async setCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <div>
          <h1>Categorias</h1>
          <ul>
            {categories.map((category) => (
              <li
                data-testid="category"
                key={ category.id }
              >
                {category.name}
              </li>))}
          </ul>
        </div>
      </div>
    );
  }
}
