import React from 'react';
import * as api from '../services/api';

export default class CategorieFilter extends React.Component {
  constructor() {
    super();

    this.FetchCategories = this.FetchCategories.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.FetchCategories();
  }

  async FetchCategories() {
    const result = await api.getCategories();
    this.setState({ categories: result });
  }

  render() {
    const { categories } = this.state;
    const { onClickEvent } = this.props;
    return (
      <div>
        {categories.map((categorie) => (
          <div key={ categorie.id }>
            <label htmlFor={ categorie.id }>{ categorie.name }</label>
            <input
              type="radio"
              data-testid="category"
              name={ categorie.name }
              value={ categorie.id }
              onClick={ onClickEvent }
            />
          </div>
        ))}
      </div>
    );
  }
}
