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
      <div>
        { categories.map((categorie) => (
          <div key={ categorie.id }>
            <label htmlFor={ categorie.id }>{ categorie.name }</label>
            <input
              type="radio"
              data-testid="category"
              name={ categorie.name }
              value={ categorie.name }
            />
          </div>
        ))}
      </div>
    );
  }
}











