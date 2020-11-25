import React from 'react';
import * as api from '../services/api';

export default class CategorieFilter extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.FecthCategories();
  }

  async FecthCategories() {
    const result = await api.getCategories();
    this.setState({ categories: result });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        { categories.map((categorie) => (
          <li key={ categorie.id }>
            {categorie.name}
          </li>
        ))}
      </ul>
    );
  }
}
